import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  errMessage: string;
  course: Course;
  constructor(private _route: ActivatedRoute, private _courseService: CourseService) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.getCourse(id);
  }

  getCourse(id: number){
    this._courseService.getCourse(id).subscribe(
      course => this.course = course,
      error => this.errMessage = <any>error
    );
  }

}
