import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Client } from '../models/client.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) {

  }

  public readClientById(id: string): Observable<Client> {
    return this.httpClient.get<Client>(`${environment.apiUrl}/clients/${id}`);
  }

}
