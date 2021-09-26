import { Injectable } from '@angular/core';

import { Location } from '@angular/common';

// for Routing

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router, private location: Location) {

  }

  routeToDashboard() {
    console.log(`In the routeToDashboard`);
    this.router.navigate(['/home']);
  }

  routeToLogin() {
    this.router.navigate(['/login']); // login is path specified in Routes
  } 

  routeBack() {
    this.location.back();
  } 

}
