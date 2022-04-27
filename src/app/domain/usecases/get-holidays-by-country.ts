import { Observable } from 'rxjs';

import { Holiday } from '../models/holiday';

export interface GetHolidaysByCountry {
    getBy(countryCode: string): Observable<Holiday[]>;
}

export abstract class GetHolidaysByCountryService implements GetHolidaysByCountry {
    abstract getBy(countryCode: string): Observable<Holiday[]>;
}
