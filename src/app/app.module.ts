import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {FormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/landing/header/header/header.component';
import { HomePageComponent } from './components/landing/home-page/home-page/home-page.component';
import { ExtraHeaderComponent } from './components/landing/header/extra-header/extra-header/extra-header.component';
import { SkillsPageComponent } from './components/skills/skills-page/skills-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    HeaderComponent,
    ExtraHeaderComponent,
    SkillsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'home', component: HomePageComponent},
      {path: 'skills', component: SkillsPageComponent},
    ]),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
