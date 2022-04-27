/* eslint-disable @typescript-eslint/dot-notation */
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuardSelectedCountryService } from './auth-guard-selected-country.service';
import { StoreSelectedCountryService } from '../../domain/usecases/store-selected-country';
import { StoreSelectedCountryServiceStub } from '../../views/pages/home/components/country-card/country-card.component.spec';

describe('AuthGuardSelectedCountryService', () => {
  let service: AuthGuardSelectedCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: StoreSelectedCountryService,
          useClass: StoreSelectedCountryServiceStub
        }
      ]
    });
    service = TestBed.inject(AuthGuardSelectedCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false if none country selected', () => {
    spyOn(service['storeSelectedCountryService'], 'get').and.returnValue(null);
    expect(service.canActivate()).toBeFalse();
  });

  it('should return true if country selected', () => {
    spyOn(service['storeSelectedCountryService'], 'get').and.returnValue({
      code: 'BR',
      name: 'brazil'
    });
    expect(service.canActivate()).toBeTrue();
  });
});
