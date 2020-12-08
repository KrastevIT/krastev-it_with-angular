import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/landing/header/header/header.component';
import { HomePageComponent } from './components/landing/home-page/home-page/home-page.component';
import { ExtraHeaderComponent } from './components/landing/header/extra-header/extra-header/extra-header.component';
import { SkillsPageComponent } from './components/skills/skills-page/skills-page.component';
import { RegisterComponent } from './components/identity/register/register/register.component';
import { LoginComponent } from './components/identity/register/login/login.component';
import { AuthService } from './services/auth.service';
import { CreateSitePageComponent } from './components/landing/create-site-page/create-site-page/create-site-page.component';
import { CreateSiteHeaderComponent } from './components/landing/create-site-page/create-site-header/create-site-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    HeaderComponent,
    ExtraHeaderComponent,
    SkillsPageComponent,
    RegisterComponent,
    LoginComponent,
    CreateSitePageComponent,
    CreateSiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'home', component: HomePageComponent},
      {path: 'skills', component: SkillsPageComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'create-site', component: CreateSitePageComponent}
    ]),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
