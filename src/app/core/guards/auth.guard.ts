import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private readonly _router: Router) {}

  isAuthenticated = true;

  canLoad() {
    if (this.isAuthenticated) {
      return true;
    }

    this._router.navigate(['/login']);
    return false;
  }
}
