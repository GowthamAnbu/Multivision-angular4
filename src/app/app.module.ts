import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseListComponent } from './courses/course-list.component';
import { CourseService } from './courses/course.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
