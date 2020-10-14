import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDate'
})
export class FilterByDatePipe implements PipeTransform {

  transform(items: any[], date: Date): any[] {
    if (!items) { return; }
    return items
      .filter(item => item.date && item.date.getTime() === date.getTime());
  }

}
