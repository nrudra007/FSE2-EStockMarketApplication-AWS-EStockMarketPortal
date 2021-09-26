import {RegisterCompany} from './register-company'

export class RegisterCompanyResponse{
    registerCompany:RegisterCompany;
    errorMsg:string='';

    constructor(registerCompany:RegisterCompany, errorMsg:string){

        this.registerCompany=registerCompany;
        this.errorMsg=errorMsg;
    }
}