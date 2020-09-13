import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Booking } from '../models/booking.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) {

  }

  public createBookingById(booking: Booking) {
    return this.httpClient.post<Booking>(`${environment.apiUrl}/bookings`, booking);
  }

}
