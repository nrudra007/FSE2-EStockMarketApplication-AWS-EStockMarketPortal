export class Company{
    companyCode:string | '';
    companyName:string | undefined;
    companyCeoName:string | undefined;
    companyTurnover:number | undefined;
    companyWebsite:string | undefined;
    companyStockExchange:string | undefined;
    latestStockPrice:bigint | undefined;


    constructor(compCode:string, compName:string, compCeoName:string, compTurnover:number,
        compWebsite:string, compStockExchange:string, latestStockPrice:bigint){

        this.companyCode=compCode;
        this.companyName=compName;
        this.companyCeoName=compCeoName;
        this.companyTurnover=compTurnover;
        this.companyWebsite=compWebsite;
        this.companyStockExchange=compStockExchange;
        this.latestStockPrice=latestStockPrice;
    }
}