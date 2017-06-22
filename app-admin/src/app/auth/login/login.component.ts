
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log(new Date().getDate() + '/' + (new Date().getMonth()+1) + '/' + new Date().getFullYear() + ' | ' + new Date().getHours() + ':' + new Date().getMinutes());
  }

  onLogin(form: NgForm) {
    this.authService.signinUser(form.value.email, form.value.password);
    this.error = this.authService.error;
    console.log(this.error);
  }

}