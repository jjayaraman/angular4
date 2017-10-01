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
  rowSelected: boolean;
  success: string = null;
  error: string = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    this.rowSelected = false;
    this.success = null;
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => { this.users = data; },
      error => { console.log(error); },
      () => {
        this.user = { id: this.getNextId(), userName: '', firstName: '', lastName: '', email: '' };
      }
    );
  }

  getNextId() {
    let maxId = 0;

    this.users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId + 1;
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe(data => { this.user = data; });
  }

  createAction() {
    //    console.log('creating... ' + this.user);ß
    this.userService.createUser(this.user).subscribe(
      data => { this.success = 'Record created sucessfully.'; },
      error => { this.error = error; },
      () => {
        // Reload data after create success
        this.getUsers();
      }
    );
  }

  updateUserAction(user: User) {
    this.userService.updateUser(user).subscribe(
      data => { this.success = 'Record updated sucessfully.'; },
      error => { this.error = error; },
      () => {
        // Reload data after create success
        this.getUsers();
        this.rowSelected = false;
      }
    );
  }

  cancelAction() {
    this.rowSelected = false;
    this.user = new User();
    this.getUsers();
    this.success = null;
    this.error = null;
  }

  rowSelect(selectedUser: User) {
    //    console.log('selected row is : ' + JSON.stringify(selectedUser));
    this.user = selectedUser;
    this.rowSelected = true;
  }

  deleteUserAction(id: number) {
    this.userService.deleteUser(id).subscribe(
      data => { this.success = 'Record deleted sucessfully.'; },
      error => { this.error = error; },
      () => { this.getUsers(); }
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
