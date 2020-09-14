import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from '../models/client.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<Client>;
  public currentUser: Observable<Client>;

  constructor(private httpClient: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<Client>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Client {
    return this.currentUserSubject.value;
  }

  public signup(client: Client) {
    return this.httpClient.post<Client>(`${environment.apiUrl}/signup`, client);
  }

  public signin(client: Client) {
    return this.httpClient.post<any>(`${environment.apiUrl}/signin`, client)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;    
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
