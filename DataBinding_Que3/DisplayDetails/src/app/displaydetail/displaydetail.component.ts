import { Component } from '@angular/core';

@Component({
  selector: 'app-displaydetail',
  templateUrl: './displaydetail.component.html',
  styleUrls: ['./displaydetail.component.css']
})
export class DisplaydetailComponent {
  content = 'Enter Your name = Shubham Bhake';
  isContentVisible = false;
  togglingLog:any=[];
  limit = 5;

  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
     
   const timestamp  = new Date().getTime();
    this.togglingLog.push(timestamp);
    this.isContentVisible = !this.isContentVisible;
  }

  getColor(i: number): string {
    if (i >= this.limit) {
      return 'blue';
    } else {
      return 'white';
    }
  }

}
