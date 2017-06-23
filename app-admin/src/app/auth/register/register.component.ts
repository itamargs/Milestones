import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './../../users/user.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: string;
  constructor(private userService: UserService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.error = null;
    if(form.value.email !== form.value.email1)
      this.error = 'כתובות המייל אינן תואמות'
    else if(form.value.password !== form.value.password1)
      this.error = 'הסיסמאות אינן תואמות'
    else if(!this.userService.userAllowed(form.value.id))
      window.alert('אינך רשום במערכת. אנא פנה למנהל');
    else{
      this.userService.registerUser(this.userService.userAllowed(form.value.id), form.value.email, form.value.password);
      this.router.navigate(['/login']);
    }
  }

}
