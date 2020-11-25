import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isShow: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showMenu(nav: any, event: any) {
    if (this.isShow) {
      nav.style.display = 'none'
      event.target.className = 'fa fa-bars'
    } else {
      nav.style.display = 'flex'
      event.target.className = 'fa fa-times'
    }
    this.isShow = !this.isShow;
  }

}
