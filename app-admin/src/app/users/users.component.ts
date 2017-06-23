import { AuthService } from './../auth/auth.service';
import { User } from './user.model';
import { UserService } from './user.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  selectedUser: User;
  selectedAdd = false;
  type:any;
  @Input() user: User;
  isAdmin = this.authService.isAdmin();
  mainPage=false;
  constructor(private userService: UserService,
              private router: ActivatedRoute,
              private authService: AuthService) { 
                console.log(this.isAdmin);
              }

  ngOnInit() {
    this.mainPage = (this.router.routeConfig.path==='main');
     if(!this.authService.isAdmin())
        {
          for(var i=0; i < this.userService.getUsers().length; i++)
            if(this.userService.findUser(this.userService.getUser(i))){
              this.selectedUser = this.userService.getUser(i);
              break;}
                  // this.userService.userSelected.emit(this.userService.getUser(0));
        }
    //this.userService.getData();
    this.userService.userSelected.subscribe(
      (user: User) => {
        this.selectedUser = user;
      }
    )
    this.userService.addSelected.subscribe(
      () => {
        this.selectedAdd = !this.selectedAdd;
      }
    )
    this.type = this.router.routeConfig.path;
  }
}
