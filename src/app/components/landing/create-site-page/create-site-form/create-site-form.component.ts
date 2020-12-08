import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateSiteService } from 'src/app/services/create-site.service';

@Component({
  selector: 'app-create-site-form',
  templateUrl: './create-site-form.component.html',
  styleUrls: ['./create-site-form.component.css']
})
export class CreateSiteFormComponent implements OnInit {
  createSiteForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private siteService: CreateSiteService,
    private router: Router) {
    this.createSiteForm = this.fb.group({
      'category': '',
      'name': '',
      'email': '',
      'description': '',
    })
  }

  ngOnInit(): void {
  }

  send() {
    this.siteService.post(this.createSiteForm.value)
    .subscribe(result => {
      console.log(result);
      this.router.navigateByUrl('/home');
    });
  }

}
