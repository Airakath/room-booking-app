import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service';
import { Room } from '../models/room.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BookingService } from '../services/booking.service';
import { Client } from '../models/client.interface';
import { Booking } from '../models/booking.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {

  public room: Room;
  public currentUser: Client;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private roomsService: RoomsService,
    private authService: AuthService,
    private bookingService: BookingService,
    public snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getParams();
    this.logged();


  }

  getParams() {
    this.activatedRoute.params.subscribe((params) => { 
      this.getData(params['id']);
    })   
  }

  getData(id) {
    this.roomsService.getRoomById(id).subscribe(data => {
      this.room = data;      
    });
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

  booking() {
    const booking: Booking = {
      client: this.currentUser._id,
      room: this.room._id
    }

    this.bookingService.createBooking(booking).subscribe( 
      res => {
        this.notification('Votre réservation a été prise en compte avec succès !');
        this.router.navigate([`/location`]);  
      },
      err => {
        this.notification(err.error.error.userMessage);     
      }
    );
  }

  notification(message) {
    this.snackbar.open(message, 'Ok', {
      duration: 4000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'custum-snackbar'
    });
  }

}
