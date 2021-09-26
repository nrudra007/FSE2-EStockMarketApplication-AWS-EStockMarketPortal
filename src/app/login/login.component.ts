import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router'

import { AuthenticationService } from '../authentication.service';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private form:FormBuilder, private router:Router,
    private authenticationService: AuthenticationService, private routerService: RouterService) { }

  loginForm=this.form.group({
    userid:["",Validators.required],
    password:["",Validators.required]
  });

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit():void{
    console.log("within onSubmit()..")
    let data = {
      username: this.f.userid.value,
      password: this.f.password.value
    }
    this.authenticationService.doLogin(data)
    .subscribe((data:any)=>{
        //console.log(data);
        this.authenticationService.setBearerToken(data.token);
        this.router.navigate(["/home"]);
    });
  }
}
