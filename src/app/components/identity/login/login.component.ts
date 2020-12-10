import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  isInvalid = false;
  intervalId: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  login() {
    let navigateUrl = this.authService.getUrlGuard();

    this.authService.login(this.loginForm.value)
      .subscribe(data => {
        this.authService.setToken(data.token);
        this.authService.setUsername(data.username);

        navigateUrl
          ? this.router.navigateByUrl(navigateUrl)
          : this.router.navigateByUrl('/home');
      },
        e => {
          this.isInvalid = true;
          this.intervalId = setInterval(() => {
            this.isInvalid = false;
            this.clearInterval();
          }, 3000);
        }
      );
  }

}
