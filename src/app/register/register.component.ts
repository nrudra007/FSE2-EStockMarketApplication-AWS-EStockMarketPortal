import { Component, OnInit } from '@angular/core';
import {CompanyServiceService} from '../company-service.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router'
import {RegisterCompany} from '../register-company'
import {RegisterCompanyResponse} from '../register-company-response'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //registerCompanyResp:RegisterCompanyResponse | undefined;
  errorMsg:string='';
  errMessage: any;
  successMessage:string='';
  companyStockExchangeList:string[]=[];

  constructor(private service:CompanyServiceService,private form:FormBuilder,private route:Router) { }
  addcom=this.form.group({
    companyCode:'',
    companyName:'',
    companyCeoName:'',
    companyTurnover:'',
    companyWebsite:'',
    companyStockExchange:''
  })

  ngOnInit(): void {
    this.errMessage = '';
    this.successMessage = '';
    this.companyStockExchangeList.push('NSE');
    this.companyStockExchangeList.push('BSE');
  }

  addCompany():void{
    console.log(`companyStockExchange from drop down --> ${this.addcom.value.companyStockExchange}`);
    let company = new RegisterCompany(this.addcom.value.companyCode, this.addcom.value.companyName, 
      this.addcom.value.companyCeoName, this.addcom.value.companyTurnover, this.addcom.value.companyWebsite,
      this.addcom.value.companyStockExchange);
    
    this.service.addCompany(company).subscribe(
      (resp)=>{
        let registerCompanyResp:RegisterCompanyResponse = resp;
        console.log(`******errorMsg from registerCompanyResp --> ${registerCompanyResp.errorMsg}`);
        this.errorMsg = registerCompanyResp.errorMsg;
        if(this.errorMsg == null){
          console.log(`company from registerCompanyResp success response --> 
            ${registerCompanyResp.registerCompany}`);
          this.successMessage = 'Company added successfully';
          this.route.navigate(["/success"]);
        }
        console.log(`errorMsg from registerCompanyResp error response --> 
          ${registerCompanyResp.errorMsg}`);
        this.errMessage = this.errorMsg;  
      },
      // code for error returned
      (er) => {
        let registerCompanyResp:RegisterCompanyResponse = er.error;
        this.errorMsg = registerCompanyResp.errorMsg;
        console.log(`************error message --> ${this.errorMsg}`);
        this.errMessage = this.errorMsg;
      });
  } 
}
