import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Client } from '../models/client.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { 

  }

  public signup(client: Client) {
    return this.httpClient.post<Client>(`${environment.apiUrl}/signup`, client);
  }

  public signin(client: Client) {
    return this.httpClient.post<Client>(`${environment.apiUrl}/signin`, client);
  }
}
