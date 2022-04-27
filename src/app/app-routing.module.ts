import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardLoginService as AuthGuard } from './auth/auth-guard-login/auth-guard-login.service';
import { AuthGuardSelectedCountryService } from './auth/auth-guard-selected-country/auth-guard-selected-country.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./views/pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'holiday-by-country',
    loadChildren: () => import('./views/pages/holiday-by-country/holiday-by-country.module').then(m => m.HolidayByCountryPageModule),
    canActivate: [AuthGuard, AuthGuardSelectedCountryService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
