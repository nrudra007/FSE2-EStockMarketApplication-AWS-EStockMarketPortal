export class RegisterCompany{
    id:string | '';
    companyCode:string | '';
    companyName:string | undefined;
    companyCeoName:string | undefined;
    companyTurnover:number | undefined;
    companyWebsite:string | undefined;
    companyStockExchange:string | undefined;


    constructor(compCode:string, compName:string, compCeoName:string, compTurnover:number,
        compWebsite:string, compStockExchange:string){
        var length = 6;
        var randomNum = 
        (Math.pow(10,length).toString().slice(length-1) + 
        Math.floor((Math.random()*Math.pow(10,length))+1).toString()).slice(-length);
        this.id='CM' + randomNum;
        this.companyCode=compCode;
        this.companyName=compName;
        this.companyCeoName=compCeoName;
        this.companyTurnover=compTurnover;
        this.companyWebsite=compWebsite;
        this.companyStockExchange=compStockExchange;
    }
}