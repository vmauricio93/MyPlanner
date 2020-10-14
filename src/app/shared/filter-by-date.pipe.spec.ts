import { FilterByDatePipe } from './filter-by-date.pipe';

describe('FilterByDatePipe', () => {
  let pipe: FilterByDatePipe;

  beforeEach(() => {
    pipe = new FilterByDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filters an array of items by their date property', () => {
    const items = [
      { description: 'item A', date: new Date('2020-01-01') },
      { description: 'item B', date: new Date('2020-01-02') },
      { description: 'item C', date: new Date('2019-01-02') },
      { description: 'item D', date: new Date('2020-01-02') },
      { description: 'item E', date: new Date('2020-02-01') },
      { description: 'item F', date: new Date('2020-01-02') }
    ];
    const date = new Date('2020-01-02');

    expect(pipe.transform(items, date)).toEqual([
      { description: 'item B', date: new Date('2020-01-02') },
      { description: 'item D', date: new Date('2020-01-02') },
      { description: 'item F', date: new Date('2020-01-02') }
    ]);
  });

  it('should do nothing if no array is passed', () => {
    expect(pipe.transform(null, new Date())).toBeUndefined();
  });
});
