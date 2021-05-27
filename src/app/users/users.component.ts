import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.users = await this.userService.getUsers();
    } catch (error) {
      console.log(error);
    }
  }
}
