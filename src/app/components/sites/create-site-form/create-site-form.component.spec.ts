import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSiteFormComponent } from './create-site-form.component';

describe('CreateSiteFormComponent', () => {
  let component: CreateSiteFormComponent;
  let fixture: ComponentFixture<CreateSiteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSiteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
