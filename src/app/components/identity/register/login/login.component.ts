import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
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
      },
        e => console.log(e));
  }

}
