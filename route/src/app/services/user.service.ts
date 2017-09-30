import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../lesson1/lesson1.component';
import 'rxjs/add/operator/map';

const URL = 'http://localhost:3000';

@Injectable()
export class UserService {

  constructor(private http: Http) { }


  getUsers() {
    return this.http.get(URL + '/users').map(res => res.json());
  }

  getUser() {
    return this.http.get(URL + '/users/1').map(res => res.json());
  }

  createUser(user: User) {
    console.log('Data passed to create user : ' + JSON.stringify(user));
    return this.http.post(URL + '/users', user).map(res => res.json());
  }
}
