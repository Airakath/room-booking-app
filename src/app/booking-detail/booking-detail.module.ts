import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingDetailRoutingModule } from './booking-detail-routing.module';
import { BookingDetailComponent } from './booking-detail.component';


@NgModule({
  declarations: [BookingDetailComponent],
  imports: [
    CommonModule,
    BookingDetailRoutingModule
  ]
})
export class BookingDetailModule { }
