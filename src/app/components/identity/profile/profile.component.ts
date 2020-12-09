import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  username2 = ''

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.profileForm = fb.group({
      username: new FormControl,
      password: new FormControl,
      newPassword: new FormControl,
      confirmationPassword: new FormControl
    })
  }

  ngOnInit(): void {
    this.profileForm.setValue({
      username: this.authService.getUsername(),
      password: '',
      newPassword: '',
      confirmationPassword: ''
    })
  }

  edit() {
    console.log(this.profileForm.value);
    this.authService.changeUserPassword(this.profileForm.value)
    .subscribe(result => {
      console.log(result);
    }) 
  }

}
