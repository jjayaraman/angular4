import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {

  users: User[];
  user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => { this.users = data; });
    this.userService.getUser().subscribe(data2 => { this.user = data2; });

    console.log('user :: ' + this.users);
  }


}

export interface User {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
}
