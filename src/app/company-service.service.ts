import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import {RegisterCompany} from './register-company'
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private http:HttpClient, private authenticationService: AuthenticationService) { }

  fetchCompanies(){
    //console.log(`bearerToken is --> ${this.authenticationService.getBearerToken()}`);
    return this.http.get<Company[]>('http://e-stock-market-lb-139553211.us-east-2.elb.amazonaws.com/e-stock-market/api/v1.0/market/company/getall', {
    headers: new HttpHeaders()
      .set('Authorization', `Bearer ${this.authenticationService.getBearerToken()}`)
    });
  }

  fetchCompanyByCompCode(compCode: string){
    console.log(`within fetchCompanyByCompCode for compCode --> ${compCode}`);
    return this.http.get<Company>(`http://e-stock-market-lb-139553211.us-east-2.elb.amazonaws.com/e-stock-market/api/v1.0/market/company/info/${compCode}`, {
    headers: new HttpHeaders()
      .set('Authorization', `Bearer ${this.authenticationService.getBearerToken()}`)
    });
  }

  addCompany(company:RegisterCompany):Observable<any>{
    console.log(`within addCompany for company having companyCode --> ${company.companyCode}`);
    return this.http.post('http://e-stock-market-lb-139553211.us-east-2.elb.amazonaws.com/e-stock-market/api/v1.0/market/company/register',
    company, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.authenticationService.getBearerToken()}`)
      }
    );
  }
}
