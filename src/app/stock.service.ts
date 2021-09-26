import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AdvanceSearchResponse } from './advance-search-response';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient, private authenticationService: AuthenticationService) { }

  fetchStocksByCompanyCodeAndStartDateEndDate(compCode: string, startDate:any, endDate:any){
    console.log(`within fetchStocksByCompanyCodeAndStartDateEndDate for compCode --> ${compCode}`
    || `, for startDate --> ${startDate}` || ` and for endDate --> ${endDate}`);
    return this.http.get<AdvanceSearchResponse>(
      `http://e-stock-market-lb-139553211.us-east-2.elb.amazonaws.com/e-stock-market/api/v1.0/market/stock/get/${compCode}/${startDate}/${endDate}`, {
      headers: new HttpHeaders()
      .set('Authorization', `Bearer ${this.authenticationService.getBearerToken()}`)
    });
  }
}
