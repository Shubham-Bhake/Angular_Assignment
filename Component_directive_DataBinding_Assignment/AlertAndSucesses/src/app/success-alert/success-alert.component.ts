import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {
  name:string="You are so sucessesful";
 

  constructor(){

  }

 
  getColor(){

    return 'Green';
  }
  
}
