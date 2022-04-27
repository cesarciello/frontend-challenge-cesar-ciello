import { IonicModule } from '@ionic/angular';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { Holiday } from '../../../domain/models/holiday';
import { HolidayByCountryPage } from './holiday-by-country.page';
import { StoreSelectedCountryService } from '../../../domain/usecases/store-selected-country';
import { GetHolidaysByCountryService } from '../../../domain/usecases/get-holidays-by-country';
import { StoreSelectedCountryServiceStub } from '../home/components/country-card/country-card.component.spec';

const holidayMock = {
  countryCode: 'BR',
  localName: 'Brazil',
  date: '2022-01-01',
  name: 'Brazil',
  regions: []
};

class GetHolidaysByCountryServiceStub implements GetHolidaysByCountryService {
  getBy(countryCode: string): Observable<Holiday[]> {
    return new Observable(sub => {
      sub.next([holidayMock]);
      sub.complete();
    });
  }
}

describe('HolidayByCountryPage', () => {
  let component: HolidayByCountryPage;
  let fixture: ComponentFixture<HolidayByCountryPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HolidayByCountryPage],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: GetHolidaysByCountryService,
          useClass: GetHolidaysByCountryServiceStub
        },
        {
          provide: StoreSelectedCountryService,
          useClass: StoreSelectedCountryServiceStub
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HolidayByCountryPage);
    component = fixture.componentInstance;
    component.currentYear = new Date().getFullYear().toString();
    component.selectedCountry = {
      code: 'BR',
      name: 'Brazil'
    };
    component.holidays = [];
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should holidays equal a getHolidaysByCountryService getBy returns', () => {
    expect(component.holidays).toEqual([holidayMock]);
  });
});
