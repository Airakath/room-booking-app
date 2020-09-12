import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from '../services/apartments.service';
import { Apartment } from '../models/apartment.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  public apatrments: Apartment[];

  constructor(
    private router: Router,
    private apartmentsService: ApartmentsService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apartmentsService.getApartmentsWithFreeRooms().subscribe(data => {
      this.apatrments = data;
    });
  }

  onRoomDetail(id) {
    this.router.navigate([`/chambre/${id}`]);
  }

}
