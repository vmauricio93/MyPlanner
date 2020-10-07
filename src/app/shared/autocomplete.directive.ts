import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import autocomplete, { AutocompleteItem } from 'autocompleter';
type Option = string & AutocompleteItem;

@Directive({
  selector: '[appAutocomplete]'
})
export class AutocompleteDirective implements OnInit {

  @Input() options: string[];

  fetch: any;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.fetch = (text: string, update: (items: string[]) => void) => {
      text = text.toLowerCase();
      let suggestions = this.options.filter(
        option => option.toLowerCase().startsWith(text)
      );
      update(suggestions);
      return { text, suggestions };
    };

    this.autocomplete();
  }

  // Should these methods be private?

  autocomplete(): void {
    autocomplete<Option>({
      input: this.el.nativeElement,
      minLength: 1,
      fetch: this.fetch,
      onSelect: this.setValueOnSelect,
      render: this.render
    });
  }

  setValueOnSelect(item: string, input: HTMLInputElement): string {
      input.value = item;
      // Trigger input value change event to update model value
      input.dispatchEvent(new Event('input'));
      return input.value;
  }

  render(item: string, currentValue: string): HTMLDivElement | undefined {
      const itemElement = document.createElement("div");
      itemElement.textContent = item;
      return itemElement;
  }
}
