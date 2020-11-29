import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      'username': [''],
      'email': [''],
      'password': ['']
    })
  }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.registerForm.value)
    .subscribe(result => {
      console.log(result);
    });
  }

}
