import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseListComponent } from './courses/course-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseAllComponent } from './courses/course-all.component';
import { CourseDetailComponent } from './courses/course-detail.component';
import { SignupComponent } from './users/signup.component';

const routes: Routes = [
  // map '/home' to the employee list component
  {
    path: 'home',
    component: CourseListComponent,
  },
  //map courses to courseAllComponent
  {
    path: 'courses',
    component:CourseAllComponent
  },
  {
    path: 'courses/:id',
    component:CourseDetailComponent
  },{
    path: 'signup',
    component: SignupComponent
  },
  // map '/' to '/home' as our default route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'404',
    component:PageNotFoundComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
