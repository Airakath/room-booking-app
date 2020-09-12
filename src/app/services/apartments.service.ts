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

  public getApartmentsWithRooms(url: string = '/apartments/rooms'): Observable<Apartment[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}${url}`);
  }

  public getApartmentsWithFreeRooms(url: string = '/apartments/freerooms'): Observable<Apartment[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}${url}`);
  }

}
