import { Component, OnInit } from '@angular/core';
import { Rental } from '../models/rental';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  rentals: Rental[];
  constructor(private rentalService: RentalService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.rentals = await this.rentalService.getRentals();
    } catch (error) {
      console.log(error);
    }
  }
}
