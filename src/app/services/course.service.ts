import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get('https://localhost:44326/course/GetCourses');
  }

  getLecturesByCourseId(id: any) {
    return this.http.get(`https://localhost:44326/course/GetLecturesByCourseId/${id}`);
  }

  getLectureByLectureId(id: any) {
    return this.http.get(`https://localhost:44326/course/GetLectureByLectureId/${id}`);
  }
}
