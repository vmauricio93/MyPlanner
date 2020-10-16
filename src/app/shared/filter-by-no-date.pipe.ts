import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByNoDate'
})
export class FilterByNoDatePipe implements PipeTransform {

  transform(items: any[]): any[] {
    if (!items) { return; }
    return items.filter(item => !item.date);
  }

}
