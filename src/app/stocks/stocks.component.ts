import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
})
export class StocksComponent implements OnInit {
  stocks: Stock[];

  constructor(private stockServcice: StockService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.stocks = await this.stockServcice.getStocks();
    } catch (error) {
      console.log(error);
    }
  }
}
