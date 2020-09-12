import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { PricePipe } from './price.pipe';


@NgModule({
  declarations: [BookingComponent, PricePipe],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MaterialModule
  ]
})
export class BookingModule { }
