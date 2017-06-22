import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
  }

   onSignOut() {
    
    this.auth.signOutUser();
  }
  

}
