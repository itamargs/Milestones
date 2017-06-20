import { AccountService } from './accountService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private logged_in: boolean = true;

  constructor(private AccountService: AccountService) {}

  ngOnInit() {
    this.AccountService.Logged().subscribe((logged: boolean) => {
      this.logged_in = logged;
      console.log(this.logged_in);
    })
  }

}
