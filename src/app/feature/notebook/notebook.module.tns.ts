import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { NotebookComponent } from '@src/app/feature/notebook/notebook.component';
import { SharedModule } from '@src/app/shared/shared.module.tns';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    SharedModule,
    Ng2FlatpickrModule
  ],
  declarations: [
  NotebookComponent],
  providers: [
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class NotebookModule { }
