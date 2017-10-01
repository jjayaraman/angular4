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

  getUser(id:number) {
    return this.http.get(URL + '/users/' +id).map(res => res.json());
  }

  createUser(user: User) {
   // console.log('Data passed to create user : ' + JSON.stringify(user));
    return this.http.post(URL + '/users', user).map(res => res.json());
  }

  updateUser(user: User) {
    this.http.put(URL + '/users/1', user);
  }

  deleteUser(id: number) {
    return this.http.delete(URL + '/users/' + id);
  }
}
