import { AppBodyComponent } from './../app-body/app-body.component';
import { User } from './../users/user.model';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.user;
    console.log(this.user);
  }

}
