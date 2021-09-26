import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import {CompanyServiceService} from '../company-service.service'

@Component({
  selector: 'app-allcomp',
  templateUrl: './allcomp.component.html',
  styleUrls: ['./allcomp.component.css']
})
export class AllcompComponent implements OnInit {

  emp:Company[]=[];
  //errMessage: any;
  noCompanyMessage: any;

  constructor(private service:CompanyServiceService) { }

  ngOnInit(): void {
    console.log("within allCompanies.ngOnInit()..");
    this.service.fetchCompanies().subscribe((res)=>{
      console.log(`allCompanies response is --> ${res}`);
      this.emp = res;
      if(this.emp === null || this.emp.length==0){
        
        this.noCompanyMessage = 'No Company registered yet!!';
        console.log(this.noCompanyMessage);
        
      }
    })
  }
}
