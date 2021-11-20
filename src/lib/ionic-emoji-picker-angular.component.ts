import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IonicEmojiPickerAngularService} from "./ionic-emoji-picker-angular.service";
import {Storage} from '@ionic/storage-angular';

@Component({
  selector: 'ionic-emoji-picker-angular',
  templateUrl: './ionic-emoji-picker-angular.component.html',
  styleUrls: ['./ionic-emoji-picker-angular.component.scss'],
})
export class IonicEmojiPickerAngularComponent implements OnInit, OnChanges {

  smileys: any = [];
  animals: any = [];
  foods: any = [];
  travel: any = [];
  activities: any = [];
  objects: any = [];
  symbols: any = [];
  flag: any = [];
  recent: any = [];
  @Input("color") color?: string;
  @Input("hide") hide: boolean = false;
  @Input("height") getHeight: string = "184px";
  @Output("getEmoji") callbackEmoji = new EventEmitter<any>();
  height: string = "height:" + this.getHeight;
  recentOld: any = [];
  initData: boolean = false;
  constructor(public loadData: IonicEmojiPickerAngularService, private loadRecent: Storage) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hide.currentValue) {
      this.height = "height:" + this.getHeight;
    } else {
      this.height = "height: 0px";
      this.recent = [];
      if(this.initData)
        this.loadRecent.get("recent_emoji").then(data => {
          if (data != null) {
            setTimeout(()=>{
              this.recentOld = data;
            }, 150);
            data.map(item=>{
              this.recent.push(item);
            });
          }
        });
    }
  }

  async ngOnInit() {
    await this.loadRecent.create();
    this.loadData.init().then(() => {
      setTimeout(() => {
        this.smileys = this.loadData.emojis.smileys;
        this.animals = this.loadData.emojis.animals;
        this.foods = this.loadData.emojis.foods;
        this.travel = this.loadData.emojis.travel;
        this.activities = this.loadData.emojis.activities;
        this.objects = this.loadData.emojis.objects;
        this.symbols = this.loadData.emojis.symbols;
        this.flag = this.loadData.emojis.flag;
      }, 300);
    });
    this.loadRecent.get("recent_emoji").then(data => {
      if (data != null) {
        this.recentOld = data;
        data.map(item=>{
          this.recent.push(item);
        });
      }
    });
    this.initData = true;

  }


  getEmoji(item: any) {

    let i = this.recent.length - 1;
    while (i >= 0) {
      if (this.recent[i].id === item.id && item.emoji === this.recent[i].emoji)
        break;
      i--;
    }

    if (i < 0) {
      if (this.recent.length >= 20) {
        this.recent.splice(this.recent.length - 1, 1);
      }
      this.recent.splice(0, 0, item);
    } else {
      this.recent.splice(i, 1);
      this.recent.splice(0, 0, item);
    }
    this.loadRecent.set("recent_emoji", this.recent).then();
    this.callbackEmoji.emit(item);
  }

}
