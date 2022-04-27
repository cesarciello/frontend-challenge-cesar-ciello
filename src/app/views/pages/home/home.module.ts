import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ComponentsModule } from '../../components/components.module';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountryHeaderComponent } from './components/country-header/country-header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    Ng2SearchPipeModule,
    ComponentsModule
  ],
  declarations: [
    HomePage,
    CountryCardComponent,
    CountryHeaderComponent
  ]
})
export class HomePageModule { }
