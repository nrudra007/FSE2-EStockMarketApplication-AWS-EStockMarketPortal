import { Component, OnInit } from '@angular/core';
import {CompanyServiceService} from '../company-service.service'
import {Company} from '../company'
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.css']
})
export class BasicSearchComponent implements OnInit {
  emp:Company[]=[];
  basic:any;
  errMessage: any;
  constructor(private service:CompanyServiceService,private form:FormBuilder) { }

  ngOnInit(): void {
    this.errMessage = '';
  }
  
  basicSearch(){
    console.log(`within basicSearch for compCode --> ${this.basic.toLowerCase()}`);
    this.errMessage = '';
    if(this.basic == ""){
      //this.ngOnInit();
    }
    else{
      this.service.fetchCompanyByCompCode(this.basic.toLowerCase()).subscribe((res)=>{
        console.log(`within basicSearch response is --> ${res}`);
        this.emp[0]=res;
        if(null == this.emp[0]){
          this.emp=[];  
          if(!this.emp || this.emp.length==0){
            this.errMessage = 'No data Found';
            console.log(this.errMessage);
          }
        }
      });
    }
  }
}
