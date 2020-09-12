import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    data: {

    },
  },
  {
    path: 'location',
    loadChildren: () => import('./my-rental/my-rental.module').then(m => m.MyRentalModule),
    data: {

    },
  },  
  {
    path: 'inscription',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule),
    data: {

    },
  },
  {
    path: 'connexion',
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule),
    data: {

    },
  },
  {
    path: '404NotFound',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
    data: {

    },
  },
  {
    path: '**',
    redirectTo: '/404NotFound',
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
