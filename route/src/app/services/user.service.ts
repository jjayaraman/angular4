import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../lesson1/lesson1.component';
import 'rxjs/add/operator/map';

const REST_URL = 'http://localhost:3000';

@Injectable()
export class UserService {

  constructor(private http: Http) { }


  getUsers() {
    return this.http.get(REST_URL + '/users').map(res => res.json());
  }

  getUser() {
    return this.http.get(REST_URL + '/users').map(res => res.json());
  }
}
