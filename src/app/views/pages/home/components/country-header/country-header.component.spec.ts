import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';

import { CountryHeaderComponent } from './country-header.component';

describe('CountryHeaderComponent', () => {
  let component: CountryHeaderComponent;
  let fixture: ComponentFixture<CountryHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CountryHeaderComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove token when call logOut', () => {
    component.logOut();
    const token = localStorage.getItem('token');
    expect(token).toBeFalsy();
  });
});
