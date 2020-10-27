import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
   exports: [CalendarComponent]
})
export class CalendarModule { }
