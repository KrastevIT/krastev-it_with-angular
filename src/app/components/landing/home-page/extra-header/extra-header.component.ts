import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-extra-header',
  templateUrl: './extra-header.component.html',
  styleUrls: ['./extra-header.component.css'],
  animations: [
    trigger('extra-animate', [
      state('true', style({ opacity: 1 })),
      transition('* <=> *', animate(5000))
    ])
  ]
})
export class ExtraHeaderComponent implements OnInit {
  isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

}
