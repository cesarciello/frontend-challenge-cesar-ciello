import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerLoadComponent } from './spinner-load/spinner-load.component';



@NgModule({
  declarations: [
    SpinnerLoadComponent
  ],
  exports: [
    SpinnerLoadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
