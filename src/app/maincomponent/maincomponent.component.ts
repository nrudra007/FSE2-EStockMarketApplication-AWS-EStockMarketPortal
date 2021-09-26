import { Component, OnInit } from '@angular/core';
import {CompanyServiceService} from '../company-service.service'
import {FormBuilder} from '@angular/forms'
import { Company } from '../company';
import {Router} from '@angular/router'

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent implements OnInit {

  com:Company[]=[];
  cname:any;
  date:any;
  model : any={};    
  emp:Company[]=[]; 
  qwe:any;
  basic:any;
  ba:any;
  public showall:boolean=false;
  public showAllButtonName:any="Show All Companies";
  public show:boolean=false;
  public buttonName:any = 'Show Advance Search';
  
  startdate:any;
  enddate:any;


  constructor(private service:CompanyServiceService, private form:FormBuilder,private router:Router) { }
 //cname:string|undefined=undefined;
  allRec:any|undefined=undefined;
  status:boolean=false;
  
  ngOnInit(): void {
    
  }

  AllRecord():void{

  //   this.showall=!this.showall;
  //   if(this.showall)  
  //   this.showAllButtonName = "Hide Advance Search";
  // else
  //   this.showAllButtonName = "Show Advance Search";

    //this.status=!this.status;
    this.service.fetchCompanies().subscribe((success)=>this.emp=success,(err)=>console.log(err))
  }

 Search2(){
  if(this.basic == ""){
    this.AllRecord();
 }
 else{
   this.emp=this.emp.filter((res: any)=>{
     return res.cname.toLowerCase().match(this.basic.toLowerCase());

      
     
   })
 }
}
  
  Search(){

   
    if(this.model.value == ""){
      this.AllRecord();
    }else{


    this.emp=this.emp.filter(res=>{
  
      this.qwe=res;
    //  res.startdate?.this.model.startdate && res.startdate<this.model.enddate;
    //    return this.emp;

    // return res.startdate?.toLocaleLowerCase().match(this.model.startdate.toLocaleLowerCase());


    //  if(res.startdate >= this.model.startdate && res.startdate<=this.model.enddate)
    //  return res;
      if(this.qwe.startdate >=this.startdate && this.qwe.startdate <= this.enddate && this.qwe.cname == this.cname){
        return this.qwe;
      }

    });
  }
  }

  /* searchdata() {  
   //  debugger;  
      this.service.searhhdata(this.model).subscribe((res: any) => {  
             
          this.emp=res.result;   
          console.log(this.emp);   
     })  
    } 
    */
    toggle() {
      this.show = !this.show;
  
      // CHANGE THE NAME OF THE BUTTON.
      if(this.show)  
        this.buttonName = "Hide Advance Search";
      else
        this.buttonName = "Show Advance Search";
    }
    logout(){
   
      this.router.navigate(["/login"]);
      
    }

}
