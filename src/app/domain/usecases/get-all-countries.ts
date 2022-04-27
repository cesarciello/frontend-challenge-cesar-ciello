import { Observable } from 'rxjs';

import { Country } from '../models/country';

export interface GetAllCountries {
    getAll(): Observable<Country[]>;
}

export abstract class GetAllCountriesService implements GetAllCountries {
    abstract getAll(): Observable<Country[]>;
}
