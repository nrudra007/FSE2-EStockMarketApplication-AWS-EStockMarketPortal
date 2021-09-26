export class Stock{
    date:string | undefined;
    time:string | undefined;
    price:bigint | undefined;
    companyCode:string | undefined;

    constructor(date:string, time:string, price:bigint, companyCode:string){
        this.date=date;
        this.time=time;
        this.price=price;
        this.companyCode=companyCode;
    }
}