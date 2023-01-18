import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {
  name:string="this is warning you are in danger";

 
  getColor(){

    return 'red';
  }
}
