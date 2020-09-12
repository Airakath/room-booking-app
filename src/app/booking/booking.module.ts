import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';


@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MaterialModule
  ]
})
export class BookingModule { }
