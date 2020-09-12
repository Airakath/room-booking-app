import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Apartment } from '../models/apartment.interface';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {

  constructor(private httpClient: HttpClient) { }

  public getApartmentsWithRooms(): Observable<Apartment[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/apartments/rooms`);
  }

  public getApartmentsWithFreeRooms(): Observable<Apartment[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/apartments/freerooms`);
  }

}
