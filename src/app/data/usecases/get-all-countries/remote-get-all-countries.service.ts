/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country } from '../../../domain/models/country';
import { environment } from '../../../../environments/environment';
import { GetAllCountries } from '../../../domain/usecases/get-all-countries';

@Injectable({
  providedIn: 'root'
})
export class RemoteGetAllCountriesService implements GetAllCountries {

  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<Country[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.tokenApiHolidays}`
    });

    return this.httpClient.get<CountryReponseAPI>(`${environment.urlApiHolidays}/Countries`, { headers })
      .pipe(map(countryResponse => countryResponse.countries.map((country => ({
        ...country,
        image: `${environment.urlApiFlags}/png/${country.code}`
      })))));

    return new Observable(sub => sub.next([
      {
        'code': 'AR',
        'name': 'Argentina'
      },
      {
        'code': 'AU',
        'name': 'Australia'
      },
      {
        'code': 'BR',
        'name': 'Brazil'
      },
      {
        'code': 'CA',
        'name': 'Canada'
      },
      {
        'code': 'CH',
        'name': 'Switzerland'
      },
      {
        'code': 'CL',
        'name': 'Chile'
      },
      {
        'code': 'CN',
        'name': 'China'
      },
      {
        'code': 'CO',
        'name': 'Colombia'
      },
      {
        'code': 'DE',
        'name': 'Germany'
      },
      {
        'code': 'DK',
        'name': 'Denmark'
      },
      {
        'code': 'ES',
        'name': 'Spain'
      },
      {
        'code': 'FR',
        'name': 'France'
      },
      {
        'code': 'GB',
        'name': 'United Kingdom'
      },
      {
        'code': 'HU',
        'name': 'Hungary'
      },
      {
        'code': 'IT',
        'name': 'Italy'
      },
      {
        'code': 'JP',
        'name': 'Japan'
      },
      {
        'code': 'KR',
        'name': 'South Korea'
      },
      {
        'code': 'MX',
        'name': 'Mexico'
      },
      {
        'code': 'SG',
        'name': 'Singapore'
      },
      {
        'code': 'US',
        'name': 'United States'
      },
      {
        'code': 'ZA',
        'name': 'South Africa'
      }
    ].map(c => ({ ...c, image: `${environment.urlApiFlags}/png/${c.code}` }))));
  }
}

export interface CountryReponseAPI {
  countries: {
    name: string;
    code: string;
  }[];
}
