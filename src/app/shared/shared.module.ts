import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteDirective } from './autocomplete.directive';
import { FilterByDatePipe } from './filter-by-date.pipe';



@NgModule({
  declarations: [AutocompleteDirective, FilterByDatePipe],
  imports: [
    CommonModule
  ],
  exports: [AutocompleteDirective, FilterByDatePipe]
})
export class SharedModule { }
