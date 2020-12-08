import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-site-form',
  templateUrl: './create-site-form.component.html',
  styleUrls: ['./create-site-form.component.css']
})
export class CreateSiteFormComponent implements OnInit {
  createSiteForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    console.log(this.createSiteForm.value);
  }

}
