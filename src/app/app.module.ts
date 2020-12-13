import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/identity/register/register.component';
import { LoginComponent } from './components/identity/login/login.component';
import { ProfileComponent } from './components/identity/profile/profile.component';
import { AdminComponent } from './components/identity/admin/admin.component';
import { QuestionsPageComponent } from './components/identity/admin/questions-page/questions-page.component';
import { AdminNavbarComponent } from './components/identity/admin/admin-navbar/admin-navbar.component';
import { AdminService } from './services/admin.service';
import { UsersPageComponent } from './components/identity/admin/users-page/users-page.component';
import { AdminHeaderComponent } from './components/identity/admin/admin-header/admin-header.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LandingModule } from './components/landing/landing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    QuestionsPageComponent,
    AdminNavbarComponent,
    UsersPageComponent,
    AdminHeaderComponent,
  ],
  imports: [
    BrowserModule,
    LandingModule,
    RouterModule.forRoot([
      { path: 'landing', loadChildren: () => LandingModule },
     
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent },

      { path: 'admin', component: AdminComponent },
      { path: 'users', component: UsersPageComponent },
      { path: 'questions', component: QuestionsPageComponent },
    ], { scrollPositionRestoration: 'enabled' }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AuthService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
