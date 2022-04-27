import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceLoginService } from '../auth-service-login/auth-service-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoginService implements CanActivate {

  constructor(
    public authLoginService: AuthServiceLoginService,
    public router: Router
  ) { }
  canActivate(): boolean {
    if (!this.authLoginService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
