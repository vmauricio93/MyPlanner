import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteDirective } from './autocomplete.directive';



@NgModule({
  declarations: [AutocompleteDirective],
  imports: [
    CommonModule
  ],
  exports: [AutocompleteDirective]
})
export class SharedModule { }
