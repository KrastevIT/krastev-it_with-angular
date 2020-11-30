import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router) {
    this.loginForm = this.fb.group({
      'username': [''],
      'password': ['']
    })
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.loginForm.value)
      .subscribe(data => {
        this.authService.saveToken(data.token);
        this.router.navigateByUrl('/home');
      },
        e => console.log(e));
  }

}