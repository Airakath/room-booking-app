import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { AuthService } from '../services/auth.service';
import { Client } from '../models/client.interface';
import { Booking } from '../models/booking.interface';

@Component({
  selector: 'app-my-rental',
  templateUrl: './my-rental.component.html',
  styleUrls: ['./my-rental.component.scss']
})
export class MyRentalComponent implements OnInit {

  public currentUser: Client;
  public booking: Booking;

  constructor(
    private bookingService: BookingService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void { 
    this.logged();
    this.getData();
  }

  logged() {
    this.authService.currentUser.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  getData() {
    this.bookingService.readBookingByClientId(this.currentUser._id).subscribe(res => {
      console.log(res);
      this.booking = res;
      
    }); 
  }

}
