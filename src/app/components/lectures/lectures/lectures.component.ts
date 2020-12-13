import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {
  lectures: any
  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(result => {
       this.courseService.getLecturesByCourseId(result.id)
       .subscribe(response => {
        this.lectures = response;
       });
      
      });
  }

}
