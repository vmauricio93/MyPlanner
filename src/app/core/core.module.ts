import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task.service';



@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [ TaskService ]
})
export class CoreModule { }
