import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service';
import { Room } from '../models/room.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {

  public room: Room;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private roomsService: RoomsService  
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.activatedRoute.params.subscribe((params) => { 
      this.getData(params['id']);
    })   
  }

  getData(id) {
    this.roomsService.getRoomById(id).subscribe(data => {
      this.room = data;      
    });
  } 

  booking() {
    console.log('reservation');
  }
}
