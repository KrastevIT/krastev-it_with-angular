import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlGuard: string = '';
  isAdmin = false;

  constructor(private http: HttpClient) { }
  private loginPath = environment.apiUrl + 'identity/login'
  private registerPath = environment.apiUrl + 'identity/register'

  private updateUser = environment.apiUrl + 'identity/UpdateUser'

  login(data: any): Observable<any> {
    return this.http.post(this.loginPath, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(this.registerPath, data);
  }

  changeUserPassword(data: any): Observable<any> {
    return this.http.post(this.updateUser, data);
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

  setUrlGuard(url: string) {
    this.urlGuard = url;
  }

  getUrlGuard() {
    let url = this.urlGuard;
    this.urlGuard = '';
    return url;
  }

  setIsAdmin(isAdmin: boolean) {
    this.isAdmin = isAdmin;
    console.log('SET', this.isAdmin);
  }

  getIsAdmin() {
    console.log('GET', this.isAdmin);
    return this.isAdmin;
  }

  removeIsAdmin() {
    this.isAdmin = false;
  }
}
