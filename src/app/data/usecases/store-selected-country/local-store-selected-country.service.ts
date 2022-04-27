import { Injectable } from '@angular/core';

import { SelectedCountry, StoreSelectedCountry } from '../../../domain/usecases/store-selected-country';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreSelectedCountryService implements StoreSelectedCountry {
  selectedCountry: SelectedCountry;

  constructor() { }
  get(): SelectedCountry {
    return this.selectedCountry;
  }
  save(selectedCountry: SelectedCountry): void {
    this.selectedCountry = selectedCountry;
  }
}
