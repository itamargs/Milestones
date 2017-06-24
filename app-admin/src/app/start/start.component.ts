import { NgForm } from '@angular/forms';
import { AppBodyComponent } from './../app-body/app-body.component';
import { User } from './../users/user.model';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  user: string;
  range: string;
  changePass = false;
  constructor(private authService: AuthService) { }
  error: string;
  ngOnInit() {
    firebase.database().ref('users').on('child_added',
      (snapshot) => {
        if(String(snapshot.child('uid').val())===String(firebase.auth().currentUser.uid))
         this.user = snapshot.child('firstName').val();
        snapshot.child('hours').forEach((dataSnap)=>this.range = dataSnap.val())
        console.log(this.range);
      })
  }

  changeSelected() {
    this.changePass = !this.changePass;
  }

  onChange(form: NgForm) {
    this.error=null;
    if(String(form.value.password)===String(form.value.password1)){
      this.authService.changePass(form.value.password);
      this.changeSelected();
    }
    else
      this.error = "הסיסמאות אינן תואמות"
  }

}
