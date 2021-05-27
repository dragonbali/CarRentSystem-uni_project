import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Rental } from '../models/rental';
import { Stock } from '../models/stock';
import { User } from '../models/user';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
})
export class BillingComponent implements OnInit {
  errorMessage: string;
  rental: Rental;
  user: User;
  stock: Stock;
  billButtonPressed: boolean;
  days: number;
  kmeters: number;
  damagePrice: number;

  billingForm: FormGroup = this.formBuilder.group({
    boxDamaged: null,
    km: [null, Validators.required],
  });

  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService,
    private formBuilder: FormBuilder
  ) {}

  async save() {
    this.billButtonPressed = true;

    let start = new Date(this.rental.startingDate);
    let end = new Date(this.rental.endingDate);
    let difference = Math.floor(
      (end.getTime() - start.getTime()) / (1000 * 3600 * 24)
    );

    this.days = difference;
    this.kmeters = this.billingForm.controls['km'].value;

    if (this.billingForm.controls['boxDamaged'].value == true) {
      this.damagePrice = this.rental.insuranceMoney;
    } else {
      this.damagePrice = 0;
    }

    this.rental.isActive = false;

    try {
      this.errorMessage = '';
      await this.rentalService.updateRental(this.rental);
    } catch (err) {
      this.errorMessage = err.error.message;
    }
  }

  async ngOnInit(): Promise<void> {
    this.billButtonPressed = false;
    try {
      this.rental = await this.rentalService.getRental(
        this.route.snapshot.params.rentalId
      );
      this.user = this.rental.user;
      this.stock = this.rental.stock;
    } catch (error) {
      console.log(error);
    }
  }
}
