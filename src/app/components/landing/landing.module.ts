import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CreateSitePageComponent } from './create-site-page/create-site-page/create-site-page.component';
import { AuthService } from 'src/app/services/auth.service';
import { CreateSiteService } from 'src/app/services/create-site.service';
import { CourseService } from 'src/app/services/course.service';
import { HomeModule } from '../home/home.module';
import { LecturesModule } from '../lectures/lectures.module';
import { SitesModule } from '../sites/sites.module';


@NgModule({
  declarations: [
    HomePageComponent,
    SkillsPageComponent,
    CoursesPageComponent,
    CreateSitePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'skills', component: SkillsPageComponent },
      { path: 'courses', component: CoursesPageComponent },
      { path: 'create-site', component: CreateSitePageComponent },
      { path: 'lectures', loadChildren: () => LecturesModule },
      { path: 'sites', loadChildren: () => SitesModule },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    LecturesModule,
    SitesModule
  ],
  exports: [
    HomePageComponent,
    SkillsPageComponent,
    CoursesPageComponent,
    CreateSitePageComponent
  ],
  providers: [AuthService, CreateSiteService, CourseService]
})
export class LandingModule { }
