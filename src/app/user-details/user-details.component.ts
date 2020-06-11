import { Component, OnInit } from '@angular/core';
import { DataService, Bookingdetails } from './../data.service';
import {Router} from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private bookingDetails: Bookingdetails = {name: '', address: '', phone_no: '', no_of_tickets: 0, seat_numbers: '', total_amount: 0};

  constructor(private dataService: DataService, private router: Router) { }

  public get booking_details(): Bookingdetails{
    return this.bookingDetails;
  }

  public addBookingDetails(){
    const currentItem: Bookingdetails = {
      name: this.booking_details.name,
      address: this.booking_details.address,
      phone_no: this.booking_details.phone_no,
      no_of_tickets: this.booking_details.no_of_tickets,
      seat_numbers: '',
      total_amount: 0
    };
    if(this.validate(currentItem)){
      this.dataService.setBookingDetails(currentItem);
      this.router.navigateByUrl('/ticketdetail');
    }
  }
  public validate(bookingDetails: Bookingdetails){
    if(this.bookingDetails.name == ''){
      alert("no. less than 10");
      return false;
    }
    if(this.bookingDetails.phone_no <= 999999999){
      alert("phone number should be atleast 10 digits");
      return false;
    }
    if(this.bookingDetails.no_of_tickets <=0 || this.bookingDetails.no_of_tickets > 100){
      alert("number of tickets should be between 1 - 100");
      return false;
    }
    return true;
  }

  ngOnInit(): void {
  }

}
