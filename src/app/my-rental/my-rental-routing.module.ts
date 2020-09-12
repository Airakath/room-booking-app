import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyRentalComponent } from './my-rental.component';

const routes: Routes = [
  {
    path: '',
    component: MyRentalComponent,
    data: {

    }
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRentalRoutingModule { }
