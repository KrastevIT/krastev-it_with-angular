import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ExtraHeaderComponent } from './extra-header/extra-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HeaderComponent,
    ExtraHeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent,
    ExtraHeaderComponent
  ]
})
export class HomeModule { }
