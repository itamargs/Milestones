import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import * as admin from 'firebase-admin';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private logged_in: boolean = false;

  constructor(private AccountService: AccountService) {}

  
  ngOnInit() {
    this.AccountService.Logged().subscribe((logged: boolean) => {
      this.logged_in = logged;
      console.log(this.logged_in);
    firebase.initializeApp({
      apiKey: "AIzaSyB5YP7-k0byIsop-1fFtVxmcohra7YwXB8",
      authDomain: "milestones-app.firebaseapp.com",
      databaseURL: "https://milestones-app.firebaseio.com"
    })
   
   /*admin.initializeApp({
      databaseURL: "https://milestones-app.firebaseio.com"
   })*/
   
  }
  

}
