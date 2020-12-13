import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSiteHeaderComponent } from './create-site-header/create-site-header.component';
import { CreateSiteBenefitComponent } from './create-site-benefit/create-site-benefit.component';
import { CreateSiteFormComponent } from './create-site-form/create-site-form.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    CreateSiteHeaderComponent,
    CreateSiteBenefitComponent,
    CreateSiteFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'create-site-form', component: CreateSiteFormComponent, canActivate: [AuthGuardService] },
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CreateSiteHeaderComponent,
    CreateSiteBenefitComponent,
    CreateSiteFormComponent
  ]
})
export class SitesModule { }
