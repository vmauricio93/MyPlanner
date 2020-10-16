import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { SharedModule } from '@src/app/shared/shared.module.tns';
import { CalendarModule } from '@src/app/feature/calendar/calendar.module.tns';
import { NotebookModule } from '@src/app/feature/notebook/notebook.module.tns';

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [
  ],
  providers: [
    SharedModule,
    NotebookModule,
    CalendarModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class FeatureModule { }
