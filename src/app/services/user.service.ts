import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

const url = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  async getUsers(): Promise<User[]> {
    return this.http.get<User[]>('http://localhost:8080/getUsers').toPromise();
  }
  addUser(user: User): Promise<User> {
    return this.http
      .post<User>('http://localhost:8080/addUser', user)
      .toPromise();
  }
}
