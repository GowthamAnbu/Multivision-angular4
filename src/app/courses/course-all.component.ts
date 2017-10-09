import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-all.component.html',
  styleUrls: ['./course-all.component.css']
})
export class CourseAllComponent implements OnInit {
  courses: Course[];
  errorMessage: string;
  constructor(private _courseService: CourseService) { }

  ngOnInit() {
    this._courseService.getCourses()
    .subscribe(courses => {
        this.courses = courses;
    }, err => this.errorMessage = <any>Error);
  }

}
