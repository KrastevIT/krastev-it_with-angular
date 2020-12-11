import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.css']
})
export class QuestionsPageComponent implements OnInit {
  questions: any

  constructor(private adminService: AdminService, private authService: AuthService) { }

  ngOnInit(): void {
    let username = this.authService.getUsername();
    this.adminService.getGetQuestions(username)
      .subscribe(result => {
        this.questions = result;
        console.log(this.questions);
      });
  }

}
