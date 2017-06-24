import { NgForm } from '@angular/forms';
import { User } from './../../user.model';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {
  users: User[];
  userSelected = [];
  userText = '';
  error: string;
  type: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
  selectUser(user: User) {
    this.error = null;
    for(var i=0; i<this.userSelected.length; i++){
      if(user===this.userSelected[i])
        this.error = "משתמש זה כבר נבחר";
    }
    if(this.error == null) {
      this.userText += user.firstName + ' ' + user.lastName + ', ';
      this.userSelected.push(user);
      console.log(this.userSelected[0].firstName);
    }
  }

  onSubmit(form: NgForm) {
    this.userSelected = [];
    this.type = String(form.value.type);
    for(var i=0; i<this.users.length; i++)
        if(String(this.type)===String(this.users[i].type))
          this.userSelected.push(this.users[i]);
    if(this.type==='0') {
      this.userText = 'חברי עמק תפארת';
    }
    else if(this.type==='1'){
      this.userText = 'חברי קטיף ישראלי';
    }
    else{
      this.userSelected = [];
      this.userText = '';
    }
    console.log(this.type);
  }

  onReset() {
    this.userSelected = [];
    this.userText = '';
    console.log(this.userSelected);
  }

}
