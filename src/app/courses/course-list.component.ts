import { Component, OnInit } from '@angular/core';
import { Course } from "./course";
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
courses: Course[];
errorMessage: string;
filteredCourses: Course[];
  constructor(private _courseService: CourseService) { }
  
  ngOnInit() {
    this._courseService.getCourses()
    .subscribe(courses => {
        this.courses = courses;
        this.filteredCourses = this.courses;
    }, err => this.errorMessage = <any>Error);
  }

}
