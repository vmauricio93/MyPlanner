import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookComponent } from './notebook.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NotebookComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class NotebookModule { }
