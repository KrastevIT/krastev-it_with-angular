import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturesComponent } from './lectures/lectures.component';
import { LectureComponent } from './lecture/lecture.component';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LecturesComponent,
    LectureComponent,
    SafePipe
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'lectures/:id', component: LecturesComponent },
      { path: 'lecture/:id', component: LectureComponent },
    ])
  ],
  exports: [
    LecturesComponent,
    LectureComponent
  ]
})
export class LecturesModule { }
