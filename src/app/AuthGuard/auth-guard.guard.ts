import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthguardService } from '../Services/AuthGuard Service/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authguardService: AuthguardService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (!this.authguardService.gettoken()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
