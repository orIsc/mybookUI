import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/state/store/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private store: Store, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);
    const token = this.store.selectSnapshot(AuthState.token);
    if(isAuthenticated) {
      const userRole = this.store.selectSnapshot(AuthState.role);
      return !!route.data['roles']?.includes(userRole);
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
  
}
