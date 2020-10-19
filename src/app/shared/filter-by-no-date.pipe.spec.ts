import { FilterByNoDatePipe } from './filter-by-no-date.pipe';

describe('FilterByNoDatePipe', () => {
  let pipe: FilterByNoDatePipe;

  beforeEach(() => {
    pipe = new FilterByNoDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filters an array of items that do not have a date property', () => {
    const items = [
      { description: 'item A', date: new Date('2020-01-01') },
      { description: 'item B' },
      { description: 'item C', date: new Date('2019-01-02') },
      { description: 'item D' },
      { description: 'item E', date: new Date('2020-02-01') },
      { description: 'item F' }
    ];

    expect(pipe.transform(items)).toEqual([
      { description: 'item B' },
      { description: 'item D' },
      { description: 'item F' }
    ]);
  });

  it('should do nothing if no array is passed', () => {
    expect(pipe.transform(null)).toBeUndefined();
  });

});
