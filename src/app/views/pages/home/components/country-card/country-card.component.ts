import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Country } from '../../../../../domain/models/country';
import { StoreSelectedCountryService } from '../../../../../domain/usecases/store-selected-country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  @Input() country: Country;

  constructor(
    private router: Router,
    private storeSelectedCountryService: StoreSelectedCountryService
  ) { }

  ngOnInit() { }

  navigateToHolidays(country: Country) {
    this.storeSelectedCountryService.save(country);
    this.router.navigate(['/holiday-by-country']);
  }

}
