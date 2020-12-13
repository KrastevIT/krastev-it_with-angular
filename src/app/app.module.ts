import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/landing/home-page/home-page.component';
import { AuthService } from './services/auth.service';
import { CreateSitePageComponent } from './components/landing/create-site-page/create-site-page/create-site-page.component';
import { CreateSiteHeaderComponent } from './components/landing/create-site-page/create-site-header/create-site-header.component';
import { CreateSiteBenefitComponent } from './components/landing/create-site-page/create-site-benefit/create-site-benefit.component';
import { CreateSiteFormComponent } from './components/landing/create-site-page/create-site-form/create-site-form.component';
import { CreateSiteService } from './services/create-site.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RegisterComponent } from './components/identity/register/register.component';
import { LoginComponent } from './components/identity/login/login.component';
import { SkillsPageComponent } from './components/landing/skills-page/skills-page.component';
import { ProfileComponent } from './components/identity/profile/profile.component';
import { AdminComponent } from './components/identity/admin/admin.component';
import { QuestionsPageComponent } from './components/identity/admin/questions-page/questions-page.component';
import { AdminNavbarComponent } from './components/identity/admin/admin-navbar/admin-navbar.component';
import { AdminService } from './services/admin.service';
import { UsersPageComponent } from './components/identity/admin/users-page/users-page.component';
import { AdminHeaderComponent } from './components/identity/admin/admin-header/admin-header.component';
import { CoursesPageComponent } from './components/landing/courses-page/courses-page.component';
import { LecturesComponent } from './components/landing/courses-page/lectures/lectures.component';
import { LectureComponent } from './components/landing/courses-page/lecture/lecture.component';
import { CourseService } from './services/course.service';
import { SafePipe } from './pipes/safe.pipe';
import { HomeModule } from './components/home/home.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SkillsPageComponent,
    RegisterComponent,
    LoginComponent,
    CreateSitePageComponent,
    CreateSiteHeaderComponent,
    CreateSiteBenefitComponent,
    CreateSiteFormComponent,
    ProfileComponent,
    AdminComponent,
    QuestionsPageComponent,
    AdminNavbarComponent,
    UsersPageComponent,
    AdminHeaderComponent,
    CoursesPageComponent,
    LecturesComponent,
    LectureComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'skills', component: SkillsPageComponent },
      { path: 'courses', component: CoursesPageComponent },
      { path: 'lectures/:id', component: LecturesComponent },
      { path: 'lecture/:id', component: LectureComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'create-site', component: CreateSitePageComponent },
      { path: 'create-site-form', component: CreateSiteFormComponent, canActivate: [AuthGuardService] },
      { path: 'admin', component: AdminComponent },
      { path: 'users', component: UsersPageComponent },
      { path: 'questions', component: QuestionsPageComponent },
    ], { scrollPositionRestoration: 'enabled' }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AuthService, CreateSiteService, AdminService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
