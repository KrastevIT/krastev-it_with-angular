import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  courses: any;

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses()
    .subscribe(result => {
      this.courses = result;
    });
  }
}
