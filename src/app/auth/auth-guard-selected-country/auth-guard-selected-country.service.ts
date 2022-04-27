import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { StoreSelectedCountryService } from '../../domain/usecases/store-selected-country';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardSelectedCountryService implements CanActivate {

  constructor(
    public router: Router,
    private storeSelectedCountryService: StoreSelectedCountryService
  ) { }

  canActivate(): boolean {
    const storedCountry = this.storeSelectedCountryService.get();

    if (!storedCountry || !storedCountry?.code || !storedCountry?.name) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
