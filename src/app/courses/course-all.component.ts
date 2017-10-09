import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-all.component.html',
  styleUrls: ['./course-all.component.css']
})
export class CourseAllComponent implements OnInit {
  courses: Course[];
  filteredCourses: Course[];
  errorMessage: string;
  constructor(private _courseService: CourseService) { }
  _searchText: string;

  get searchText(): string{
    return this._searchText;
  } 

  set searchText(value: string){
    this._searchText = value;
    console.log("setting searchtext");
    this.filteredCourses = this._searchText ? this.performFilter(this._searchText) : this.courses;
  }

  performFilter(filterBy: string): Course[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.courses.filter((course: Course)=>
        course.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

  ngOnInit() {
    this._courseService.getCourses()
    .subscribe(courses => {
        this.courses = courses;
        this.filteredCourses = this.courses;
    }, err => this.errorMessage = <any>Error);
  }

}
