import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  this.getReservierung();

  }
  reservierungen: any;
  //private reservierungUrl = "reservierung";

  getReservierung(){
    return this.httpClient.get("reservierung").subscribe(x =>{
      this.reservierungen = x;
      console.log(this.reservierungen);
    });

  }

}
