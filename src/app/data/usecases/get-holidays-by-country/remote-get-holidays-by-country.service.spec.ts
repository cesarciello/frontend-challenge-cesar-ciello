/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { of } from 'rxjs';

import { HolidaysResponseAPI, RemoteGetHolidaysByCountryService } from './remote-get-holidays-by-country.service';

const holidayApiResponseMock: HolidaysResponseAPI = {
  holidays: [
    {
      date: '2022-01-01',
      name: 'New Year\'s Day',
      local_name: 'New Year\'s Day',
      country_code: 'GB',
      regions: [
        'GB-NIR'
      ],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-01-03',
      name: 'New Year\'s Day',
      local_name: 'New Year\'s Day',
      country_code: 'GB',
      regions: [
        'GB-ENG',
        'GB-WLS'
      ],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-01-03',
      name: 'New Year\'s Day',
      local_name: 'New Year\'s Day',
      country_code: 'GB',
      regions: [
        'GB-SCT'
      ],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-01-04',
      name: 'New Year\'s Day',
      local_name: 'New Year\'s Day',
      country_code: 'GB',
      regions: [
        'GB-SCT'
      ],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-03-17',
      name: 'Saint Patrick\'s Day',
      local_name: 'Saint Patrick\'s Day',
      country_code: 'GB',
      regions: [
        'GB-NIR'
      ],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-04-15',
      name: 'Good Friday',
      local_name: 'Good Friday',
      country_code: 'GB',
      regions: [],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-04-18',
      name: 'Easter Monday',
      local_name: 'Easter Monday',
      country_code: 'GB',
      regions: [
        'GB-ENG',
        'GB-WLS',
        'GB-NIR'
      ],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-05-02',
      name: 'Early May Bank Holiday',
      local_name: 'Early May Bank Holiday',
      country_code: 'GB',
      regions: [],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-06-02',
      name: 'Spring Bank Holiday',
      local_name: 'Spring Bank Holiday',
      country_code: 'GB',
      regions: [],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-06-03',
      name: 'Queen???s Platinum Jubilee',
      local_name: 'Queen???s Platinum Jubilee',
      country_code: 'GB',
      regions: [],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-07-12',
      name: 'Battle of the Boyne',
      local_name: 'Battle of the Boyne',
      country_code: 'GB',
      regions: [
        'GB-NIR'
      ],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-08-01',
      name: 'Summer Bank Holiday',
      local_name: 'Summer Bank Holiday',
      country_code: 'GB',
      regions: [
        'GB-SCT'
      ],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-08-29',
      name: 'Summer Bank Holiday',
      local_name: 'Summer Bank Holiday',
      country_code: 'GB',
      regions: [
        'GB-ENG',
        'GB-WLS',
        'GB-NIR'
      ],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-11-30',
      name: 'Saint Andrew\'s Day',
      local_name: 'Saint Andrew\'s Day',
      country_code: 'GB',
      regions: [
        'GB-SCT'
      ],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-12-26',
      name: 'St. Stephen\'s Day',
      local_name: 'Boxing Day',
      country_code: 'GB',
      regions: [],
      types: [
        'Public'
      ]
    },
    {
      date: '2022-12-27',
      name: 'Christmas Day',
      local_name: 'Christmas Day',
      country_code: 'GB',
      regions: [],
      types: [
        'Public'
      ]
    }
  ]
};

describe('RemoteGetHolidaysByCountryService', () => {
  let service: RemoteGetHolidaysByCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(RemoteGetHolidaysByCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be transform response api to Holiday', () => {
    spyOn(service['httpClient'], 'post').and.returnValue(of(holidayApiResponseMock));
    service.getBy('BR').subscribe(data => {
      expect(data).toEqual(holidayApiResponseMock.holidays.map(holiday => ({
        date: holiday.date,
        name: holiday.name,
        regions: holiday.regions,
        localName: holiday.local_name,
        countryCode: holiday.country_code,
      })));
    });
  });
});
