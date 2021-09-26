import { Component, OnInit } from '@angular/core';
import {StockService} from '../stock.service'
import {CompanyServiceService} from '../company-service.service'
import {AdvanceSearchResponse} from '../advance-search-response'
import {Company} from '../company'
import {Stock} from '../stock'
import {FormBuilder} from '@angular/forms'
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-adv-search',
  templateUrl: './adv-search.component.html',
  styleUrls: ['./adv-search.component.css']
})
export class AdvSearchComponent implements OnInit {

  advSearchResp:AdvanceSearchResponse | undefined;
  companyList:Company[]=[];
  // companyCodeList:string[]=[];
  compcode:any;
  startdate:any;
  enddate:any;
  qwe:any;
  errMessage: any;
  stockList:Stock[]=[];
  minStockPrice:any;
  maxStockPrice:any;
  avgStockPrice:any;
  companyName:string='';
  errorMsg:string='';
  advSearchFormGroup = new FormGroup({
    compcode: new FormControl()
  });
  maxDate:any;

  constructor(private companyService:CompanyServiceService, private stockService:StockService, 
    private form:FormBuilder, public datepipe: DatePipe) {
      this.maxDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
  } 

  ngOnInit(): void {
    this.errMessage = '';
    this.companyService.fetchCompanies().subscribe((res)=>{
      this.companyList = res;
      
      if(!this.companyList || this.companyList.length==0){
        this.errMessage = 'No data Found';
        console.log(this.errMessage);
      }
      
    });
  }

  advSearch(){
    console.log(`within advSearch for compCode --> ${this.advSearchFormGroup.value.compcode}`);
    console.log(`within advSearch for startDate --> ${this.startdate}`);
    console.log(`within advSearch for endDate --> ${this.enddate}`);
    this.errMessage = '';
    if(!this.advSearchFormGroup.value.compcode || !this.startdate || !this.enddate){
      this.errMessage = 'All the 3 fields are mandatory for search..';
    }else if(this.startdate === this.enddate){
      this.errMessage = 'Start Date & End Date can not be same..';
    }
    else if(this.startdate > this.enddate){
      this.errMessage = 'Start Date must be before End Date..';
    }
    else{
      this.stockService.fetchStocksByCompanyCodeAndStartDateEndDate(
        this.advSearchFormGroup.value.compcode, this.startdate, this.enddate)
      .subscribe((res)=>{
        this.advSearchResp = res;
        this.errorMsg = this.advSearchResp.errorMsg;
        console.log(`errorMsg from advSearch response --> ${this.errorMsg}`);
        if(this.errorMsg == null){
          this.companyName = this.advSearchResp.companyName;
          console.log(`companyName from advSearch response --> ${this.companyName}`);
          this.stockList = this.advSearchResp.stockList;
          this.minStockPrice = this.advSearchResp.minStockPrice;
          this.maxStockPrice = this.advSearchResp.maxStockPrice;
          this.avgStockPrice = this.advSearchResp.avgStockPrice;
        }else{
          this.errMessage = this.errorMsg;
        }   
      },
      // code for error returned
      (er) => {
        let advSearchResp:AdvanceSearchResponse = er.error;
        this.errMessage = advSearchResp.errorMsg;
      });
    }
  } 
}
