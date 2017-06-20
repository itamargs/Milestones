import { User } from './../users/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.css']
})
export class AppBodyComponent implements OnInit {
@Input() user: User;
  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
