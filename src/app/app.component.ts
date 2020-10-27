import { Component } from '@angular/core';
import { UiKitService } from './core/ui-kit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private uiKit: UiKitService) {
    this.uiKit.useUIkitIcons();
  }
  
}
