import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';

const url = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  async getStocks(): Promise<Stock[]> {
    return this.http
      .get<Stock[]>('http://localhost:8080/getStocks')
      .toPromise();
  }
  async updateStock(stock: Stock): Promise<Stock[]> {
    return this.http
      .put<Stock[]>('http://localhost:8080/updateStock', stock)
      .toPromise();
  }
}
