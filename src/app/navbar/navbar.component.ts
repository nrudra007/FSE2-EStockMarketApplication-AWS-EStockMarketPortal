import { Component, OnInit } from '@angular/core';
import {CompanyServiceService} from '../company-service.service'
import {Router} from '@angular/router'
import {ReactiveFormsModule,FormBuilder} from '@angular/forms'
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:CompanyServiceService,private router:Router,
    private authenticationService: AuthenticationService, private form:FormBuilder) { }

  ngOnInit(): void {
  }

  routeToHome(){
    console.log(`In the routeToHome`);
    this.router.navigate(['/home']);
  }

  routeToAllRecords(){
    this.router.navigate(['/all']);
  }

  routeToBasicSearch(){
    this.router.navigate(["/basic"])
  }

  routeToAdvanceSearch(){
    this.router.navigate(['/advance']);
  }

  logout(){ 
    this.authenticationService.logoutUser();   
  }
}
