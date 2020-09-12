import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Room } from '../models/room.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private httpClient: HttpClient) { }

  public getRoomById(id: string): Observable<Room> {
    return this.httpClient.get<Room>(`${environment.apiUrl}/rooms/${id}`);
  }
}
