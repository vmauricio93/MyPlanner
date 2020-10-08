import { Injectable } from '@angular/core';
import Fuse from "fuse.js";

@Injectable({
  providedIn: 'root'
})
export class FuseService {
  options: Fuse.IFuseOptions<any> = { ignoreLocation: true, threshold: 0.2 };

  constructor() { }

  searchFromList(
    pattern: string, list: any[], keys: string[]
  ): any[] {
    this.options.keys = keys;
    const fuse = new Fuse(list, this.options);
    return fuse.search(pattern).map(result => result.item);
  }
  
}
