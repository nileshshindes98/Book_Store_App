import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthguardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.gettoken()) {
      return true; // Allow access if authenticated
    } else {
      this.router.navigate(['/login']); // Redirect to the login page if not authenticated
      return false; // Deny access
    }
  }

  gettoken(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Return true if a valid token exists, or false if not
  }
}
