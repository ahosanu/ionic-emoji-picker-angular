# Ionic Emoji Picker Angular

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

##Installation
### Install the module via NPM
```shell
npm i @wiexon/ionic-emoji-picker-angular
```



##Import it in your app's module(s)

###Import IonicEmojiPickerAngularModule in your app's main module


export class AppModule {}
If your app uses lazy loading, you need to import EmojiPickerModule in your shared module or child modules:
```ts
import {IonicEmojiPickerAngularModule} from "ionic-emoji-picker-angular";

@NgModule({
    .......
    imports: [
        ......
        IonicEmojiPickerAngularModule
        ......
    ],
    ......
})
export class AppModule {}
```

If your app uses lazy loading, you need to import `EmojiPickerModule` in your shared module or child modules:
```ts
import {IonicEmojiPickerAngularModule} from "ionic-emoji-picker-angular";

@NgModule({
    ...
    imports: [
      ...
        IonicEmojiPickerAngularModule
      ],
    ...
})
export class SharedModule {}
```

### Sample

```html
<ion-buttons>
  <ion-button (click)="showEmojiPicker = !showEmojiPicker">
    <ion-icon slot="icon-only"  *ngIf="!showEmojiPicker" name="happy"></ion-icon>
    <ion-icon slot="icon-only" *ngIf="showEmojiPicker" name="w-keyboard"></ion-icon>
  </ion-button>
</ion-buttons>
<ion-textarea placeholder="Type a message" [formControl]="_message" rows="1" (click)="clickTextBox()"></ion-textarea>
<ionic-emoji-picker-angular color="light" (getEmoji)="getEmoji($event)" [hide]="showEmojiPicker" height="300px"></ionic-emoji-picker-angular>
```

```ts
showEmojiPicker: boolean = false;
_message = new FormControl('', Validators.required);
........
getEmoji(emoji: any) {
  this._message.setValue(this._message.value + emoji.emoji);
}

clickTextBox() {
  this.showEmojiPicker = false;
}
```

### Emitter `(getEmoji)="getEmoji($event)""`

```
$event = EmojiEvent({ "id": 1,"name": "Grinning Face", "emoji": "😀"})
```
