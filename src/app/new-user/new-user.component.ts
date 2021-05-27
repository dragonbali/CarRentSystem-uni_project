import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  errorMessage: string;

  userForm: FormGroup = this.formBuilder.group({
    id: [0],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    age: [null, Validators.required],
    IDNumber: [null, Validators.required],
    phone: [null, Validators.required],
    address: [null, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  get id() {
    return this.userForm.get('id');
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get age() {
    return this.userForm.get('age');
  }

  get IDNumber() {
    return this.userForm.get('IDNumber');
  }

  get phone() {
    return this.userForm.get('phone');
  }

  get address() {
    return this.userForm.get('address');
  }

  ngOnInit(): void {}

  async addUser() {
    const user = this.userForm.value;
    try {
      this.errorMessage = '';
      await this.userService.addUser(user);
      this.router.navigateByUrl('/newRental');
    } catch (err) {
      this.errorMessage = err.error.message;
    }
  }
}
