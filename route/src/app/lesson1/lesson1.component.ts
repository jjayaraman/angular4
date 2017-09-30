import { Http } from '@angular/http';
import { error } from 'util';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {

  users: User[];
  user: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => { this.users = data; },
      error => { console.log(error); },
      () => {
        this.user = { id: this.users.length + 1, userName: '', firstName: '', lastName: '', email: '' };
      }
    );
  }

  getUser() {
    this.userService.getUser().subscribe(data => { this.user = data; });
  }

  create() {
    console.log('creating... ' + this.user);
    this.userService.createUser(this.user).subscribe(
      data => { console.log(data); },
      error => { console.log(error); },
      () => {
        // Reload data after create success
        this.getUsers();
      }
    );
  }
}

export class User {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
}
