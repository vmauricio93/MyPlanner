import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { AutocompleteDirective } from './autocomplete.directive';
import { FilterByDatePipe } from './filter-by-date.pipe';

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [
    AutocompleteDirective,
    FilterByDatePipe
  ],
  providers: [
  ],
  exports: [
    AutocompleteDirective,
    FilterByDatePipe
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { }
