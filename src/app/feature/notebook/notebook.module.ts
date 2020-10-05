import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookComponent } from './notebook.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';



@NgModule({
  declarations: [NotebookComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Ng2FlatpickrModule
  ]
})
export class NotebookModule { }
