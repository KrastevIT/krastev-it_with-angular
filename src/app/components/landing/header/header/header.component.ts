import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style, keyframes } from '@angular/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('title-animate', [
      state('true', style({ transform: 'translateY(-109px)', opacity: 1 })),
      transition('* <=> *', animate(3000))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isOpen = true;
 
  constructor() { }

  ngOnInit(): void {
  }

  onDone() {

  }
}
