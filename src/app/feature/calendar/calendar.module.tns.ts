import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { CalendarComponent } from '@src/app/feature/calendar/calendar.component';

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [
  CalendarComponent],
  providers: [
  ],
  exports: [CalendarComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CalendarModule { }
