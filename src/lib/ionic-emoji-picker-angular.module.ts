import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SuperTabsModule} from "@ionic-super-tabs/angular";
import {IonicModule} from "@ionic/angular";
import {IonicEmojiPickerAngularComponent} from "./ionic-emoji-picker-angular.component";
import {Storage} from "@ionic/storage-angular";


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
  ],
  providers: [
    Storage
  ]
})
export class IonicEmojiPickerAngularModule {

}
