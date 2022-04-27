import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolidayByCountryPage } from './holiday-by-country.page';

const routes: Routes = [
  {
    path: '',
    component: HolidayByCountryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidayByCountryPageRoutingModule {}
