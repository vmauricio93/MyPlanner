import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task.service';
import { UiKitService } from './ui-kit.service';



@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [ TaskService, UiKitService ]
})
export class CoreModule { }
