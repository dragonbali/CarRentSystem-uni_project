import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-new-rental',
  templateUrl: './new-rental.component.html',
  styleUrls: ['./new-rental.component.css'],
})
export class NewRentalComponent implements OnInit {
  users: User[];
  stocks: Stock[];
  allStocks: Stock[];

  errorMessage: string;

  rentalForm: FormGroup = this.formBuilder.group({
    id: [0],
    startingDate: [null, Validators.required],
    endingDate: [null, Validators.required],
    isActive: [true],
    isDamaged: [false],
    insuranceMoney: [null, Validators.required],
    user: [null],
    stock: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private stockService: StockService,
    private userService: UserService,
    private rentalService: RentalService,
    private router: Router
  ) {}

  get id() {
    return this.rentalForm.get('id');
  }
  get startingDate() {
    return this.rentalForm.get('startingDate');
  }
  get endingDate() {
    return this.rentalForm.get('endingDate');
  }
  get isActive() {
    return this.rentalForm.get('isActive');
  }
  get isDamaged() {
    return this.rentalForm.get('isDamaged');
  }
  get insuranceMoney() {
    return this.rentalForm.get('insuranceMoney');
  }

  async ngOnInit(): Promise<void> {
    try {
      this.users = await this.userService.getUsers();
      this.stocks = (await this.stockService.getStocks()).filter(
        (item) => item.available == true
      );
    } catch (error) {
      console.log(error);
    }
  }

  async addRental() {
    const rental = this.rentalForm.value;
    let stockToUpdate: Stock;
    this.stocks.forEach((element) => {
      if (element.id === rental.stock.id) {
        stockToUpdate = element;
      }
    });
    stockToUpdate.available = false;
    try {
      this.errorMessage = '';
      await this.rentalService.addRental(rental);
      await this.stockService.updateStock(stockToUpdate);

      this.router.navigateByUrl('/rent');
    } catch (err) {
      this.errorMessage = err.error.message;
    }
  }
}
