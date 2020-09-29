import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookModule } from './notebook/notebook.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    NotebookModule
  ]
})
export class FeatureModule { }
