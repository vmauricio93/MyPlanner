import { Injectable } from '@angular/core';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

@Injectable({
  providedIn: 'root'
})
export class UiKitService {

  constructor() { }

  useUIkitIcons(): void {
    // @ts-ignore
    UIkit.use(Icons);
  }

  createConfirmationModal(message: string): Promise<void> {
    return UIkit.modal.confirm(message);
  }
}
