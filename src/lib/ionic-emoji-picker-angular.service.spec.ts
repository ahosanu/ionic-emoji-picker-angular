import { TestBed } from '@angular/core/testing';

import { IonicEmojiPickerAngularService } from './ionic-emoji-picker-angular.service';

describe('IonicEmojiPickerAngularService', () => {
  let service: IonicEmojiPickerAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicEmojiPickerAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
