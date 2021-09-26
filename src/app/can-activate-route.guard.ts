import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from './authentication.service';
import { RouterService } from './router.service';


@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private routerService: RouterService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.authenticationService.isLoggedIn()){
      return true;
    }        
    this.routerService.routeToLogin();
    return false;
  }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   let authenticatedStatus =false;
  //   const bearerToken = this.authenticationService.getBearerToken();
  //   return this.authenticationService.isUserAuthenticated(bearerToken)
  //     .then((response) => {
  //        console.log(`response =>${response}`);
  //       if (!response) {
  //         // if not authenticated (false) redirect to login
  //         this.routerService.routeToLogin();
  //       }
  //       return response;
  //     })
  //     .catch((err)=>{
  //       this.routerService.routeToLogin();
  //       return false;
  //     }

  //     ) 
      

  // }
}
