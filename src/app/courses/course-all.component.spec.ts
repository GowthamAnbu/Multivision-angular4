import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAllComponent } from './course-all.component';

describe('CourseAllComponent', () => {
  let component: CourseAllComponent;
  let fixture: ComponentFixture<CourseAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
