import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Client } from '../models/client.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _token: string;
  private _user: Client;

  tokenSubject = new Subject<string>();
  userSubject = new Subject<Client>();

  constructor(private httpClient: HttpClient) { 

  }

  public set token(value: string) {
    this._token = value;

    this.emitTokenSubject();
  }

  public get token() {
    return this._token;
  }

  public set user(value: Client) {
    this._user = value;

    this.emitUserSubject();
  }

  public get user() {
    return this._user;
  }

  emitTokenSubject() {
    this.tokenSubject.next(this._token);
    console.log(this._token);
  }

  emitUserSubject() {
    this.userSubject.next(this._user);
    console.log(this._user);
  }

  public signup(client: Client) {
    return this.httpClient.post<Client>(`${environment.apiUrl}/signup`, client);
  }

  public signin(client: Client) {
    return this.httpClient.post<any>(`${environment.apiUrl}/signin`, client);
  }
}
