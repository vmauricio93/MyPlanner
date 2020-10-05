import { Injectable } from '@angular/core';

import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es'

@Injectable({
  providedIn: 'root'
})
export class FlatpickrService {

  constructor() { }

  localizeSpanish(): void {
    flatpickr.localize(Spanish);
  }
}
