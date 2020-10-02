import { TestBed } from '@angular/core/testing';
import UIkit from 'uikit';

import { UiKitService } from './ui-kit.service';
import Icons from 'uikit/dist/js/uikit-icons';

describe('UiKitService', () => {
  let service: UiKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use icons from UIkit', () => {
    // @ts-ignore
    spyOn(UIkit, 'use');
    service.useUIkitIcons();
    expect(UIkit.use).toHaveBeenCalledWith(Icons);
  });

  it('should create a confirmation modal', () => {
    spyOn(UIkit.modal, 'confirm');
    service.createConfirmationModal('message');
    expect(UIkit.modal.confirm).toHaveBeenCalledWith('message');
  });
});
