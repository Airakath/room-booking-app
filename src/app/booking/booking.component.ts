import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from '../services/apartments.service';
import { Apartment } from '../models/apartment.interface';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  public apatrments: Apartment[];

  constructor(
    private apartmentsService: ApartmentsService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apartmentsService.getApartmentsWithRooms().subscribe(data => {      
      this.apatrments = data;
    });
  }

}
