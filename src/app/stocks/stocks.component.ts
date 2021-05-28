import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';
import { Rental } from '../models/rental';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
})
export class StocksComponent implements OnInit {
  stocks: Stock[];
  rentals: Rental[];

  constructor(
    private stockServcice: StockService,
    private rentalService: RentalService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.stocks = await this.stockServcice.getStocks();
      this.rentals = await this.rentalService.getRentals();
    } catch (error) {
      console.log(error);
    }
  }
}
