import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { BookingDetailRoutingModule } from './booking-detail-routing.module';
import { BookingDetailComponent } from './booking-detail.component';
import { ApartmentPipe } from './apartment.pipe';
import { PricePipe } from './price.pipe';


@NgModule({
  declarations: [BookingDetailComponent, ApartmentPipe, PricePipe],
  imports: [
    CommonModule,
    BookingDetailRoutingModule,
    MaterialModule
  ]
})
export class BookingDetailModule { }
