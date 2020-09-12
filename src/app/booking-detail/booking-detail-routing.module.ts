import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailComponent } from './booking-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BookingDetailComponent,
    data: {

    }
  },   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingDetailRoutingModule { }
