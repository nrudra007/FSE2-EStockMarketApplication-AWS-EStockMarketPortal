import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  com:any|undefined=undefined;
  successMessage:string='';

  constructor() { }

  ngOnInit(): void {
    this.successMessage = 'Company added successfully..';
  }
}
