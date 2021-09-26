import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// for HttpClient
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // injecting HttpClient instance in authentication service
  constructor(private httpClient: HttpClient, private router: Router) {

  }
   
  token:any;

  doLogin(data: any):Observable<any>{
    return this.httpClient.post('http://e-stock-market-lb-139553211.us-east-2.elb.amazonaws.com/e-stock-market/api/v1.0/market/user/login', data);
  }

  // validateToken() {
  //   let data: string = 'validate token';
  //   console.log(`authenticateUser data is --> ${JSON.stringify(data)}`);
  //   return this.httpClient.post('http://localhost:8765/api/v1.0/market/user/validate-token', data, 
  //     {
  //     headers: new HttpHeaders()
  //       .set('Authorization', `Bearer ${this.getBearerToken()}`)
  //     }
  //   );
  // }

  setBearerToken(token: string) {
    //console.log(`bearerToken is --> ${token}`);
    localStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }

  isLoggedIn(){
    let authToken = localStorage.getItem("bearerToken"); 
    //console.log(`within isLoggedIn, authToken is: ${authToken}`);
    if(authToken===null || authToken==="" || authToken===undefined){
      return false;
    }
    else{
      return true;
    }
  }

  logoutUser(){
    localStorage.removeItem("bearerToken");
    this.router.navigate(['/login']);
  }

  setLoggedInUser(loggedInUser: any){
    console.log(`About to set the loggedInUser ${loggedInUser}`);
    localStorage.setItem('loggedInUser', loggedInUser);
  }

  getLoggedInUser() {
    let loggedInuser = localStorage.getItem('loggedInUser');
    console.log(`The loggedInUser is ${loggedInuser}`);
    return loggedInuser;
  }
}
