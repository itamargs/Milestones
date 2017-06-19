import { Hours } from './../../hours.model';
import { AuthService } from './../../../auth/auth.service';
import { DataStorageService } from 'app/shared/data-storage.service';
import { UserService } from './../../user.service';
import { User } from './../../user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  error: string;
  constructor(private userService: UserService, private authService: AuthService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    
  }
  closeAddForm() {
    this.userService.addSelected.emit();
  }
  onSubmit(form: NgForm) {
    const newUser = new User(form.value.first_name,
                              form.value.last_name,
                              form.value.id,
                              form.value.email,
                              form.value.id,
                              +form.value.type,
                              [new Hours('none','none','none','none','none',0,0)],
                              '');
    this.userService.addUser(newUser);
    this.authService.signupUser(newUser.email, String(newUser.password));
    
    this.error = this.authService.error ;
     this.dataStorageService.setUser(newUser);
    //form.reset();
    if(!this.error)
      this.closeAddForm();
    
  }

}
