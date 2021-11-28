import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SuperTabsModule} from "@ionic-super-tabs/angular";
import {IonicModule} from "@ionic/angular";
import {IonicEmojiPickerAngularComponent} from "./ionic-emoji-picker-angular.component";
import {Storage} from "@ionic/storage-angular";
import {IonicEmojiPickerAngularService} from "./ionic-emoji-picker-angular.service";


@NgModule({
  declarations: [
    IonicEmojiPickerAngularComponent
  ],
  imports: [
    CommonModule,
    SuperTabsModule.forRoot(),
    IonicModule
  ],
  exports: [
    IonicEmojiPickerAngularComponent
  ]
})
export class IonicEmojiPickerAngularModule {
  constructor(private load: IonicEmojiPickerAngularService) {
    if(load.loaded)
      load.init().then((data)=>{
        load.loaded = data;
      });
  }
  static forRoot(): ModuleWithProviders<IonicEmojiPickerAngularModule>{
    return {
      ngModule: IonicEmojiPickerAngularModule,
      providers: [
        Storage
      ]
    }
  }
}
