import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rental } from '../models/rental';

const url = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  constructor(private http: HttpClient) {}

  async getRentals(): Promise<Rental[]> {
    return this.http
      .get<Rental[]>('http://localhost:8080/getRentals')
      .toPromise();
  }

  async getRental(id): Promise<Rental> {
    return this.http
      .get<Rental>('http://localhost:8080/getRental/' + id)
      .toPromise();
  }

  addRental(rental: Rental): Promise<Rental> {
    return this.http
      .post<Rental>('http://localhost:8080/addRental', rental)
      .toPromise();
  }

  updateRental(rental: Rental): Promise<Rental> {
    return this.http
      .put<Rental>('http://localhost:8080/updateRental', rental)
      .toPromise();
  }
}
