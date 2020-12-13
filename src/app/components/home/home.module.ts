import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ExtraHeaderComponent } from './extra-header/extra-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ExtraHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ExtraHeaderComponent
  ]
})
export class HomeModule { }
