import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';

import { UserService } from './services/user.service';

export const routes: Routes = [
  {path : 'lesson1', component : Lesson1Component},
  {path : 'lesson2', component : Lesson2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash : true})
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

