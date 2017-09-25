import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';

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
    RouterModule.forRoot(routes, {useHash : true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

