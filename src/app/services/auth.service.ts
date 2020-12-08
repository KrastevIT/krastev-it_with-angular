import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private loginPath = environment.apiUrl + 'identity/login'
  private registerPath = environment.apiUrl + 'identity/register'

  login(data: any): Observable<any> {
    return this.http.post(this.loginPath, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(this.registerPath, data);
  }

  isLoggedIn() {
    return this.getToken() ? true : false;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.clear();
  }

  setUsername(username: string) {
    localStorage.setItem('username', username);
  }

  getUsername() {
    return localStorage.getItem('username');
  }
}
