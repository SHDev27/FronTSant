import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../models/auth/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  logInUser(user: User): boolean {
    if (user.usuario.toLowerCase() == "admincg" && user.contrasena == "123") {
      this.storage.set("jwtUser", "true");
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
      return true;
    }

    return false;
  }

  logOutUser() {
    this.loggedIn.next(false);
    this.storage.remove("jwtUser");
    location.href = "./login";
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}