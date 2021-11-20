import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonicEmojiPickerAngularComponent } from './ionic-emoji-picker-angular.component';

describe('IonicEmojiPickerAngularComponent', () => {
  let component: IonicEmojiPickerAngularComponent;
  let fixture: ComponentFixture<IonicEmojiPickerAngularComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicEmojiPickerAngularComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonicEmojiPickerAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
