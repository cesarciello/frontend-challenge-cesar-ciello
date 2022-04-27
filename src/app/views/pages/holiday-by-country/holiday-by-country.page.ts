import { Component, OnInit } from '@angular/core';

import { GetHolidaysByCountryService } from '../../../domain/usecases/get-holidays-by-country';
import { StoreSelectedCountryService } from '../../../domain/usecases/store-selected-country';

@Component({
  selector: 'app-holiday-by-country',
  templateUrl: './holiday-by-country.page.html',
  styleUrls: ['./holiday-by-country.page.scss'],
})
export class HolidayByCountryPage implements OnInit {

  selectedCountry = {
    code: '',
    name: ''
  };
  holidays = [];
  currentYear = new Date().getFullYear().toString();

  constructor(
    private getHolidaysByCountryService: GetHolidaysByCountryService,
    private storeSelectedCountryService: StoreSelectedCountryService
  ) { }

  ngOnInit() {
    this.selectedCountry = this.storeSelectedCountryService.get();
    this.getHolidaysByCountryService.getBy(this.selectedCountry.code).subscribe(holidays => {
      this.holidays = holidays;
    });
  }

}
