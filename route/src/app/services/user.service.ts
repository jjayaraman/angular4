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

  getUser(id: number) {
    return this.http.get(URL + '/users/' + id).map(res => res.json());
  }

  createUser(user: User) {
    return this.http.post(URL + '/users', user);
  }

  updateUser(user: User) {
    return this.http.put(URL + '/users/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(URL + '/users/' + id);
  }
}
