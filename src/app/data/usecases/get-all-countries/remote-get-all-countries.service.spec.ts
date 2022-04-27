/* eslint-disable @typescript-eslint/dot-notation */
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { of } from 'rxjs';

import { environment } from '../../../../environments/environment.prod';
import { CountryReponseAPI, RemoteGetAllCountriesService } from './remote-get-all-countries.service';

const coutriesResponseApiMock: CountryReponseAPI = {
  countries: [
    {
      code: 'AR',
      name: 'Argentina'
    },
    {
      code: 'AU',
      name: 'Australia'
    },
    {
      code: 'BR',
      name: 'Brazil'
    },
    {
      code: 'CA',
      name: 'Canada'
    },
    {
      code: 'CH',
      name: 'Switzerland'
    },
    {
      code: 'CL',
      name: 'Chile'
    },
    {
      code: 'CN',
      name: 'China'
    },
    {
      code: 'CO',
      name: 'Colombia'
    },
    {
      code: 'DE',
      name: 'Germany'
    },
    {
      code: 'DK',
      name: 'Denmark'
    },
    {
      code: 'ES',
      name: 'Spain'
    },
    {
      code: 'FR',
      name: 'France'
    },
    {
      code: 'GB',
      name: 'United Kingdom'
    },
    {
      code: 'HU',
      name: 'Hungary'
    },
    {
      code: 'IT',
      name: 'Italy'
    },
    {
      code: 'JP',
      name: 'Japan'
    },
    {
      code: 'KR',
      name: 'South Korea'
    },
    {
      code: 'MX',
      name: 'Mexico'
    },
    {
      code: 'SG',
      name: 'Singapore'
    },
    {
      code: 'US',
      name: 'United States'
    },
    {
      code: 'ZA',
      name: 'South Africa'
    }
  ]
};

describe('RemoteGetAllCountriesService', () => {
  let service: RemoteGetAllCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(RemoteGetAllCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be transform response api to Holiday', () => {
    spyOn(service['httpClient'], 'get').and.returnValue(of(coutriesResponseApiMock));
    service.getAll().subscribe(data => {
      expect(data).toEqual(coutriesResponseApiMock.countries.map(c => ({ ...c, image: `${environment.urlApiFlags}/png/${c.code}` })));
    });
  });
});
