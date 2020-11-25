import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraHeaderComponent } from './extra-header.component';

describe('ExtraHeaderComponent', () => {
  let component: ExtraHeaderComponent;
  let fixture: ComponentFixture<ExtraHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
