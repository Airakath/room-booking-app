import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  tutoriels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  constructor() { }

  ngOnInit(): void {
  }

}
