import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  users: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUsers()
    .subscribe(result =>{
      this.users = result;
    });
  }

}
