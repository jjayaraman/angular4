import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  age: number;
  books: Array<string>;
  address: Address;

  constructor() {
    this.name = 'JJJay';
    this.age = 44;
    this.books = ['java', '.net'];
    this.address = { line1: "7, Victoria Rd", town: "Nice town", country: "US", postCode: "W6 7XX" };
  }

  ngOnInit() {
    console.log('Init..');

  }

  clicked(){
    console.log('clicked..');
    this.books.push('xxx');
  }

}

interface Address {
  line1: string,
  town: string,
  country: string,
  postCode: string
}