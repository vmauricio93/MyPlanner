import { TestBed } from '@angular/core/testing';

import { FuseService } from './fuse.service';

describe('FuseService', () => {
  let service: FuseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search from strings in an object array', () => {
    const objectArray = [
      { description: 'taskOne', place: 'abc', done: true },
      { description: 'AbsoluteTask', place: 'BAcDe', tag: 'Atag', done: false },
      { description: 'defgabc', done: true },
      { description: 'AnotherBigChore', done: false },
      { description: 'anotherTask', tag:'ABCd', done: false }
    ];

    const searchResult = service.searchFromList(
      'abc', objectArray, ['description', 'place', 'tag']
    );

    const filteredArray = [
      { description: 'taskOne', place: 'abc', done: true },
      { description: 'defgabc', done: true },
      { description: 'anotherTask', tag:'ABCd', done: false }
    ];
    expect(searchResult).toEqual(filteredArray);
  });

  it('should search from strings, ignoring diacritics', () => {
    const objectArray = [
      { description: 'tílde' },
      { description: 'nodiacritics' },
      { description: 'NO_TILDE' }
    ];

    const searchResult = service.searchFromList(
      'tilde', objectArray, ['description']
    );

    const filteredArray = [
      { description: 'tílde' },
      { description: 'NO_TILDE' }
    ];
    expect(searchResult).toEqual(filteredArray);
  });
});
