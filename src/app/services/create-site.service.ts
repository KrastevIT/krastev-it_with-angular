import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateSiteService {

  constructor(private http: HttpClient) { }

  post(data: any) {
    return this.http.post('https://localhost:44326/site/CreateQuestion', data);
  }
}
