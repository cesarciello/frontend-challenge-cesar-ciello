import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HolidayByCountryPageRoutingModule } from './holiday-by-country-routing.module';

import { HolidayByCountryPage } from './holiday-by-country.page';
import { ComponentsModule } from '../../components/components.module';
import { HolidayCardComponent } from './components/holiday-card/holiday-card.component';
import { HolidayHeaderComponent } from './components/holiday-header/holiday-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HolidayByCountryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HolidayByCountryPage, HolidayCardComponent, HolidayHeaderComponent]
})
export class HolidayByCountryPageModule { }
