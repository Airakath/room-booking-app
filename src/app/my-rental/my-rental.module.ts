import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRentalRoutingModule } from './my-rental-routing.module';
import { MyRentalComponent } from './my-rental.component';


@NgModule({
  declarations: [MyRentalComponent],
  imports: [
    CommonModule,
    MyRentalRoutingModule
  ]
})
export class MyRentalModule { }
