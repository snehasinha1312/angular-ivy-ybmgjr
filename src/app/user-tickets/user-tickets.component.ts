import { Component, OnInit } from '@angular/core';
import { DataService, Bookingdetails } from './../data.service';
import {Router} from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-user-tickets',
  templateUrl: './user-tickets.component.html',
  styleUrls: ['./user-tickets.component.css']
})
export class UserTicketsComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  public bookingDetails: Bookingdetails = this.dataService.getBookingDetails();

  public addSeatsToBookingDetails(){
  }

  ngOnInit(): void {
    $('.seat').click(function(){
      var val = [];
      var selected = '';
      $(':checkbox:checked').each(function(i){
        val[i] = $(this).attr('id');
        selected = selected + ' + ' + val[i];
      });
      $('#selected').html(selected.substring(2));
      console.log(val);
      console.log(selected.substring(2));
    });

    $('#submit').click(() => {
      var val = [];
      var selected = '';
      $(':checkbox:checked').each(function(i){
        val[i] = $(this).attr('id');
        selected = selected + ' + ' + val[i];
      });
      console.log(val.length);
      if (val.length > this.bookingDetails.no_of_tickets || val.length < this.bookingDetails.no_of_tickets){
        alert('Please select ' + this.bookingDetails.no_of_tickets + ' seats');
      }
      else{
        this.bookingDetails.seat_numbers = selected.substring(2);
        this.dataService.setBookingDetails(this.bookingDetails);
        this.router.navigateByUrl('/confirmation');
      }
      console.log(val);
      console.log(selected.substring(2));
    });

    $('#name').html(this.bookingDetails.name);
    $('#address').html(this.bookingDetails.address);
    $('#phone_no').html(this.bookingDetails.phone_no);
    $('#no_of_seats').html(this.bookingDetails.no_of_tickets);
    console.log(this.bookingDetails);
  }

}
