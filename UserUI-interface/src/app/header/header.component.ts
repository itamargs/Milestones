import { AccountService } from './../accountService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private logged_in: boolean = false;

  constructor(private AccountService : AccountService) { }

  ngOnInit(){
    this.AccountService.Logged().subscribe((logged: boolean) => {
      this.logged_in = logged;
      console.log(this.logged_in);
    })
  }
}
