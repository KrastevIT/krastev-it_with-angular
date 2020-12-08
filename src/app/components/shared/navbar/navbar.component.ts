import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations'
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('nav-animate', [
      state('true', style({ transform: ' translateY(400px)' })),
      transition('* <=> *', animate(500))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  isShow: boolean = false;
  isOpen = false;
  userName: any

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  getUsername() {
    return this.userName = this.authService.getUsername();
  }

  logout() {
    this.authService.removeToken();
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
    this.isOpen = !this.isOpen;
  }

}
