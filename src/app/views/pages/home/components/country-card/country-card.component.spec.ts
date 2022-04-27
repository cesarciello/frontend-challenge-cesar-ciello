import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';

import { CountryCardComponent } from './country-card.component';
import { SelectedCountry, StoreSelectedCountry, StoreSelectedCountryService } from '../../../../../domain/usecases/store-selected-country';

export class StoreSelectedCountryServiceStub implements StoreSelectedCountry {
  storedCountry: SelectedCountry = {
    code: '',
    name: ''
  };

  get(): SelectedCountry {
    return this.storedCountry;
  }
  save(selectedCountry: SelectedCountry): void {
    this.storedCountry = selectedCountry;
    return;
  }
}

const mockCountry = {
  code: 'BR',
  name: 'Brazil',
  image: ''
};

describe('CountryCardComponent', () => {
  let component: CountryCardComponent;
  let fixture: ComponentFixture<CountryCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CountryCardComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        {
          provide: StoreSelectedCountryService,
          useClass: StoreSelectedCountryServiceStub
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryCardComponent);
    component = fixture.componentInstance;
    component.country = mockCountry;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
