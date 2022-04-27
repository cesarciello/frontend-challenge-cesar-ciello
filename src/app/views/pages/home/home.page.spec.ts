import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Observable } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HomePage } from './home.page';
import { Country } from '../../../domain/models/country';
import { GetAllCountries, GetAllCountriesService } from '../../../domain/usecases/get-all-countries';

const mockCountry = {
  code: 'BR',
  name: 'Brazil',
  image: ''
};
class GetAllCountriesServiceStub implements GetAllCountries {
  callCount = 0;

  getAll(): Observable<Country[]> {
    this.callCount++;
    return new Observable(sub => {
      sub.next([mockCountry]);
      sub.complete();
    });
  }
}

const getAllCountriesServiceStub = new GetAllCountriesServiceStub();

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), Ng2SearchPipeModule],
      providers: [
        {
          provide: GetAllCountriesService,
          useValue: getAllCountriesServiceStub
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllCountriesService once in create', () => {
    expect(getAllCountriesServiceStub.callCount).toBeGreaterThanOrEqual(1);
  });

  it('should countries have the same valeu getAllCountriesServiceStub returns', () => {
    expect(component.countries).toEqual([mockCountry]);
  });
});
