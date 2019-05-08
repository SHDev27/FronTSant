import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authentication/auth.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn$: Observable<boolean>;
  
  constructor(private authService: AuthService) { 

  }

  ngOnInit() {
    this.loggedIn$ = this.authService.isLoggedIn;
  }

  click_logOut() {
    this.authService.logOutUser();
  }
}
