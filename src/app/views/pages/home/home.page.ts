import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Country } from '../../../domain/models/country';
import { GetAllCountriesService } from '../../../domain/usecases/get-all-countries';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  countries: Country[] = [];
  filteredCountry = '';

  constructor(
    private getAllCountriesService: GetAllCountriesService,
  ) {
    this.getAllCountriesService.getAll().subscribe(countries => {
      this.countries = countries;
    });
  }

}
