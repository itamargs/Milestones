import { Messages } from './../messages.model';
import { Hours } from './../hours.model';

import { FilterListPipe } from './filter-list.pipe';
import { UserService } from './../user.service';
import { User } from './../user.model';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from 'firebase';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[];
  selectedUser: User;
  @Input() type: any;
  deleteSelected = false;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userService.userSelected.subscribe(
      (user: User) => {
        this.selectedUser = user;
      }
    )
    this.users = this.filter(this.type);
    this.userService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = this.filter(this.type);
      }
    )

  }

//================== filtered users by type and sort by last and first name ===================
  filter(type: any) {
    var pageType: number;
    if(type==='emek')
      pageType = 0;
    else
      pageType = 1;
    
    const filterArray = [];
    for(const user of this.userService.getUsers()) {
      if(pageType === user.type) {
        filterArray.push(user);
      }
    }
    filterArray.sort((a,b) => {
          if(a.lastName < b.lastName)
            return -1
          if(a.lastName > b.lastName)
            return 1;
          if(a.lastName === b.lastName) {
            if(a.firstName < b.firstName)
              return -1;
            if(a.firstName > b.firstName)
              return 1;
          }
          return 0;
        })  
    return filterArray;
  }
  //=============================================================================================


  openAddWindow() {
    this.userService.addSelected.emit();
    this.onUserSelected(null);
  }

  onDeleteUser(user: User) {
      this.userService.removeUser(this.userService.getIndex(user));
      this.onUserSelected(null);
    
  }

  onUserSelected(user: User) {
    this.userService.userSelected.emit(this.userService.getUser(this.userService.getIndex(user)));
  }

  chooseDelete() {
     this.deleteSelected = !this.deleteSelected;
  }

  sendMessage(user: User) {
    this.onUserSelected(user);
    this.userService.msgSelected.emit();
    
  }
    
    onChartUser(user: User) {
     let limit;
      if(user.hours){
      if(user.type===1) {
        limit = 0;
        for(var i=0; i<user.hours.length;i++)
          limit+=(+user.hours[i].totalHours);
        limit = (limit/250)*100;
      }
      if(user.type===0)
        limit = (user.hours.length/100)*100;
        
      limit = parseFloat(limit).toFixed(2);
      }
      return limit;
    }
}
