import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style} from '@angular/animations'

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
  animations: [
    trigger('title-animate', [
      state('true', style({ transform: ' translateY(50px)', opacity: 1 })),
      transition('* <=> *', animate(3000))
    ])
  ]
})
export class AdminHeaderComponent implements OnInit {
  isOpen = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
