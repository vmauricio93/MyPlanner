import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteDirective } from './autocomplete.directive';
import { FilterByDatePipe } from './filter-by-date.pipe';
import { FilterByNoDatePipe } from './filter-by-no-date.pipe';



@NgModule({
  declarations: [AutocompleteDirective, FilterByDatePipe, FilterByNoDatePipe],
  imports: [
    CommonModule
  ],
  exports: [AutocompleteDirective, FilterByDatePipe, FilterByNoDatePipe]
})
export class SharedModule { }
