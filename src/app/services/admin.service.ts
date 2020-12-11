import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getGetQuestions(username: any): Observable<any> {
    return this.http.get(`https://localhost:44326/site/GetQuestions/${username}`);
  }
}
