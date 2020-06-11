import { Component, OnInit } from '@angular/core';
import { DataService, Bookingdetails } from './../data.service';
import $ from 'jquery';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private dataService: DataService) { }
  public bookingDetails: Bookingdetails = this.dataService.getBookingDetails();
  value : string = JSON.stringify(this.bookingDetails);

  ngOnInit(): void {
    $('#name1').html(this.bookingDetails.name);
    $('#address1').html(this.bookingDetails.address);
    $('#phone_no1').html(this.bookingDetails.phone_no);
    $('#no_of_seats1').html(this.bookingDetails.no_of_tickets);
    $('#selected1').html(this.bookingDetails.seat_numbers);
    $('#amount1').html(this.bookingDetails.total_amount);
    console.log(this.bookingDetails);
  }

}