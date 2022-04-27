import { TestBed } from '@angular/core/testing';
import { SelectedCountry } from 'src/app/domain/usecases/store-selected-country';

import { LocalStoreSelectedCountryService } from './local-store-selected-country.service';

const countrySelectedMock: SelectedCountry = {
  code: 'BR',
  name: 'Brazi;'
};

describe('LocalStoreSelectedCountryService', () => {
  let service: LocalStoreSelectedCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStoreSelectedCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be selectedCountry equal get returns', () => {
    service.selectedCountry = countrySelectedMock;
    expect(service.get()).toEqual(countrySelectedMock);
  });

  it('should save change selectedCountry value', () => {
    service.selectedCountry = {
      code: 'OT',
      name: 'other'
    };
    service.save(countrySelectedMock);
    expect(service.get()).toEqual(countrySelectedMock);
  });
});
