import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Course } from './course';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class CourseService {

private _courseUrl = "./api/courses/courses.json";

  constructor(private _http: HttpClient) { }

  getCourses(): Observable<Course[]>{
    return this._http.get<Course[]>(this._courseUrl)
            // .do(data =>console.log("ALL" + JSON.stringify(data)))
            .catch(this.handleError);
}
  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
