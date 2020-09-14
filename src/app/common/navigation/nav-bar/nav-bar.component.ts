import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Client } from 'src/app/models/client.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  currentUser: Client;
  identity: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.authService.currentUser.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.identity = `${user.firstName} ${user.lastName}`;
      }
    });
  }

  deconnexion() {
    this.authService.logout();
    this.currentUser = null;
    this.router.navigate([`/connexion`]);   
  }

}
