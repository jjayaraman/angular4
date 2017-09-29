import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../lesson1/lesson1.component';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers() {
     return this.http.get('http://localhost:3000/users').map(res => res.json());
    }
}
