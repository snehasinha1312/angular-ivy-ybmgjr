// Core
import { Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http' ;

// Liberaries
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Bookingdetails {
  name: string;
  phone_no: string;
  address: string;
  no_of_tickets: number;
  seat_numbers: string;
  total_amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private bookingDetails: Bookingdetails;
  // private api = environment.localApi;
  constructor(){}

  setBookingDetails(bookingdetails: Bookingdetails) {
    this.bookingDetails = bookingdetails;
  }

  getBookingDetails() {
    return this.bookingDetails;
  }
}
