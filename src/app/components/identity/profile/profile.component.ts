import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: any;
  username;
  isInvalid = false;
  intervalId: any;

  isMatchPassword = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.username = this.authService.getUsername();
  }


  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      username: new FormControl({ value: this.username, disabled: true }),
      password: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmationPassword: new FormControl('', Validators.required)
    })

    this.profileForm.valueChanges.subscribe(() => {
      this.isMatchPassword = this.profileForm.get('confirmationPassword').value === this.profileForm.get('newPassword').value
        && this.profileForm.get('confirmationPassword').value !== '';
    });
  }

  clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  edit() {
    let model = {
      'username': this.username,
      'password': this.profileForm.get('password').value,
      'newPassword': this.profileForm.get('newPassword').value
    }

    this.authService.changeUserPassword(model)
      .subscribe(result => {
      }, e => {
        this.isInvalid = true;
        this.intervalId = setInterval(() => {
          this.isInvalid = false;
          this.clearInterval();
        }, 3000);
      })
  }

}
