import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookModule } from './notebook/notebook.module';
import { SharedModule } from '../shared/shared.module';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from './calendar/calendar.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    NotebookModule,
    CalendarModule,
    HomeModule
  ]
})
export class FeatureModule { }
