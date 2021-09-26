import { Stock } from './stock';

export class AdvanceSearchResponse
{
    companyName:string='';
    stockList:Stock[]=[];
    maxStockPrice:bigint | undefined;
    minStockPrice:bigint | undefined;
    avgStockPrice:bigint | undefined;
    errorMsg:string='';

    constructor(companyName:string, stockList:Stock[], maxStockPrice:bigint, minStockPrice:bigint, 
        avgStockPrice:bigint, errorMsg:string){
        this.companyName=companyName
        this.stockList=stockList;
        this.maxStockPrice=maxStockPrice;
        this.minStockPrice=minStockPrice;
        this.avgStockPrice=avgStockPrice;
        this.errorMsg=errorMsg;
    }
}