//import { Component } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  subscriptions = ["Basic", "Advanced", "Pro"];
  selectedSubscription = "Advanced";
  @ViewChild('signupForm') sgForm:any= NgForm

  onSubmit() {
    console.log(this.sgForm.value);
  }
}
