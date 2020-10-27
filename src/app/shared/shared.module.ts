import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteDirective } from './autocomplete.directive';
import { FilterByDatePipe } from './filter-by-date.pipe';
import { FilterByNoDatePipe } from './filter-by-no-date.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AutocompleteDirective,
    FilterByDatePipe,
    FilterByNoDatePipe,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AutocompleteDirective,
    FilterByDatePipe,
    FilterByNoDatePipe,
    NavbarComponent
  ]
})
export class SharedModule { }
