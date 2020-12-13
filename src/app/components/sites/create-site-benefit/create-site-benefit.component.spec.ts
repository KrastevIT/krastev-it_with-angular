import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSiteBenefitComponent } from './create-site-benefit.component';

describe('CreateSiteBenefitComponent', () => {
  let component: CreateSiteBenefitComponent;
  let fixture: ComponentFixture<CreateSiteBenefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSiteBenefitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSiteBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
