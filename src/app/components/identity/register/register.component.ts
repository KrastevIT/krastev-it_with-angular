import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  isInvalid = false;
  intervalId: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  register() {
    this.authService.register(this.registerForm.value)
      .subscribe(result => {
        this.authService.login(result)
          .subscribe(dataLogin => {
            this.authService.setToken(dataLogin.token);
            this.authService.setUsername(dataLogin.username);
            this.router.navigateByUrl('/');
          });
      }, e => {
        this.isInvalid = true;
        this.intervalId = setInterval(() => {
          this.isInvalid = false;
          this.clearInterval();
        }, 3000);
      });
  }

}
