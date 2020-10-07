import { Component, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AutocompleteDirective } from './autocomplete.directive';

describe('AutocompleteDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ AutocompleteDirective, TestComponent ]
    }).createComponent(TestComponent);
    fixture.detectChanges();

    debugElement = fixture.debugElement.query(
      By.directive(AutocompleteDirective)
    );
  });

  it('should create an instance', () => {
    const directive = new AutocompleteDirective(debugElement);
    expect(directive).toBeTruthy();
  });

  it('should read the options from the component', () => {
    const directive = debugElement.injector.get(AutocompleteDirective);
    expect(directive.options).toEqual(
      ['Option1', 'O_PTION2', 'anotherOption', 'fourth-opt']
    );
  });

  it('should fetch the options based on the input value', () => {
    const directive = debugElement.injector.get(AutocompleteDirective);
    const inputValue = 'oPT';

    const update = function (items: string[]) {
      return (items: string[]) => { }
    };
    
    const fetchResult = directive.fetch(
      inputValue, update(['Option1', 'O_PTION2', 'anotherOption', 'fourth-opt'])
    );
    expect(fetchResult).toEqual({ text: 'opt', suggestions: ['Option1']});
  });

  it('should set the input value to the selected one from suggestions', () => {
    const input = debugElement.nativeElement;
    const directive = debugElement.injector.get(AutocompleteDirective);

    directive.setValueOnSelect('anotherOption', input);
    expect(input.value).toBe('anotherOption');
  });

  it('should create an element to render containing the suggestions', () => {
    const directive = debugElement.injector.get(AutocompleteDirective);
    const itemElement = directive.render('O_PTION2', 'o_');
    expect(itemElement.textContent).toBe('O_PTION2');
  });

});

@Component({
  template: `<input appAutocomplete [options]="options">`
})
class TestComponent {
  options: string[] = ['Option1', 'O_PTION2', 'anotherOption', 'fourth-opt'];
}
