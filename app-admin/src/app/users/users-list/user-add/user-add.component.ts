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
  error = false;
  constructor(private userService: UserService, private authService: AuthService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    
  }

  closeAddForm() {
    this.userService.addSelected.emit();
  }

  onSubmit(form: NgForm) {
    if(String(form.value.id).length < 6)
      this.error = true;
    else{
      const newUser = new User(form.value.first_name,
                              form.value.last_name,
                              form.value.id,
                              '',
                              '',
                              +form.value.type,
                              null,
                              null,
                              '');
      this.userService.addUser(newUser);
      //this.authService.signupUser(newUser.email, String(newUser.password));
      this.closeAddForm();
    }
  }
}
