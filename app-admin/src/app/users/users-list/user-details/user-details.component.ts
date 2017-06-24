import { UserService } from './../../user.service';
import { User } from './../../user.model';
import { Component, OnInit, Input, Output } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;  
  constructor(private userService: UserService) { }

  ngOnInit() {
   
  }

}
