import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { GetAllCountriesService } from '../domain/usecases/get-all-countries';
import { StoreSelectedCountryService } from '../domain/usecases/store-selected-country';
import { GetHolidaysByCountryService } from '../domain/usecases/get-holidays-by-country';
import { RemoteGetAllCountriesService } from './usecases/get-all-countries/remote-get-all-countries.service';
import { LocalStoreSelectedCountryService } from './usecases/store-selected-country/local-store-selected-country.service';
import { RemoteGetHolidaysByCountryService } from './usecases/get-holidays-by-country/remote-get-holidays-by-country.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: GetAllCountriesService,
      useClass: RemoteGetAllCountriesService,
    },
    {
      provide: GetHolidaysByCountryService,
      useClass: RemoteGetHolidaysByCountryService
    },
    {
      provide: GetHolidaysByCountryService,
      useClass: RemoteGetHolidaysByCountryService
    },
    {
      provide: StoreSelectedCountryService,
      useClass: LocalStoreSelectedCountryService
    },
  ]
})
export class DataModule { }
