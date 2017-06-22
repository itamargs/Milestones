import { ActivatedRoute } from '@angular/router';
import { UserService } from './../users/user.service';
import { User } from './../users/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.css']
})
export class AppBodyComponent implements OnInit {
@Input() user: User;
  type: string;
  constructor(private userService: UserService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.type = this.router.routeConfig.path;
  }

}
