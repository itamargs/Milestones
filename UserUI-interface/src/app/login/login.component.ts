import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form);
    this.LoginService.login(form.value.user,form.value.password);
  }
}