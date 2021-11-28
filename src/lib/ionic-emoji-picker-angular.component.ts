import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IonicEmojiPickerAngularService} from "./ionic-emoji-picker-angular.service";

@Component({
  selector: 'ionic-emoji-picker-angular',
  templateUrl: './ionic-emoji-picker-angular.component.html',
  styleUrls: ['./ionic-emoji-picker-angular.component.scss'],
})
export class IonicEmojiPickerAngularComponent implements OnChanges, AfterViewInit {

  smileys: any = [];
  animals: any = [];
  foods: any = [];
  travel: any = [];
  activities: any = [];
  objects: any = [];
  symbols: any = [];
  flag: any = [];
  recent: any = [];
  recentChange: boolean = true;
  @Input("color") color?: string;
  @Input("hide") hide: boolean = false;
  @Input("height") getHeight: string = "184px";
  @Output("getEmoji") callbackEmoji = new EventEmitter<any>();
  height: string = "height:" + this.getHeight;
  recentOld: any = [];
  initData: boolean = false;

  constructor(public loadData: IonicEmojiPickerAngularService) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.recentOld = this.loadData.recentOld;
      this.smileys = this.loadData.smileys;
      this.animals = this.loadData.animals;
      this.foods = this.loadData.foods;
      this.travel = this.loadData.travel;
      this.activities = this.loadData.activities;
      this.objects = this.loadData.objects;
      this.symbols = this.loadData.symbols;
      this.flag = this.loadData.flag;
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hide.currentValue) {
      this.height = "height:" + this.getHeight;
    } else {
      this.height = "height: 0px";
      if (this.recentChange) {
        this.loadData.loadRecent.get("recent_emoji").then(data => {
            this.recentChange = false;
            if (data != null) {
              setTimeout(() => {
                this.recentOld = data;
              }, 250);
            }
          }
        );
      }
    }
  }

  getEmoji(item: any) {
    let i = this.recent.length - 1;
    while (i >= 0) {
      if (this.recent[i].id === item.id && item.emoji === this.recent[i].emoji)
        break;
      i--;
    }

    if (i < 0) {
      if (this.recent.length >= 35) {
        this.recent.splice(this.recent.length - 1, 1);
      }
      this.recent.splice(0, 0, item);
    } else {
      this.recent.splice(i, 1);
      this.recent.splice(0, 0, item);
    }
    this.recentChange = true;
    this.loadData.loadRecent.set("recent_emoji", this.recent).then();
    this.callbackEmoji.emit(item);
  }

}
