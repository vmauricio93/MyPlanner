import { Injectable } from '@angular/core';
import Fuse from "fuse.js";

@Injectable({
  providedIn: 'root'
})
export class FuseService {
  options: Fuse.IFuseOptions<any> = {
    ignoreLocation: true,
    threshold: 0.2,
    getFn: (obj: any, path: string | string[]) => {
      // @ts-ignore
      const value = Fuse.config.getFn(obj, path);
      return this.removeDiacritics(value);
    }
  };

  constructor() { }

  searchFromList(
    pattern: string, list: any[], keys: string[]
  ): any[] {
    this.options.keys = keys;
    const fuse = new Fuse(list, this.options);
    const patternWithoutDiacritics = this.removeDiacritics(pattern);
    return fuse.search(patternWithoutDiacritics).map(result => result.item);
  }

  private removeDiacritics(word: string): string {
    if (word) {
      word = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    return word;
  }
  
}
