import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, CanActivate, Router, CanActivateChild, CanDeactivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { UsersComponent } from './users/users.component';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate, CanActivateChild, CanDeactivate<UsersComponent> {

  constructor(
    private appService: AppService,
    private router: Router
  ) {

  }

  canDeactivate(component: UsersComponent) {
    return component.confirm();
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(next, state) && this.appService.isAdmin;
  }

  private checkLogin(url: string): boolean {
    if (this.appService.isLogged) {
      return true;
    }

    this.appService.redirectURL = url;
    this.router.navigate(['/login']);
  }

}
