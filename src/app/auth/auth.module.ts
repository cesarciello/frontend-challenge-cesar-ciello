import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuardLoginService } from './auth-guard-login/auth-guard-login.service';
import { AuthServiceLoginService } from './auth-service-login/auth-service-login.service';
import { AuthGuardSelectedCountryService } from './auth-guard-selected-country/auth-guard-selected-country.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuardLoginService,
    AuthGuardSelectedCountryService,
    AuthServiceLoginService
  ]
})
export class AuthModule { }
