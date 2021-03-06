import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements  CanActivate {


  constructor(private authService: AuthService,
              private router: Router) {

  }

  canActivate(activeRouteSnapshot: ActivatedRouteSnapshot,
              activeRouteStateSnapshot: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Authentication Before Any Routing
    return true;
    /*return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean ) => {
            if (authenticated) {
              return true;
            } else {
              this.router.navigate(['/']);
            }
        }
      );*/
  }

}
