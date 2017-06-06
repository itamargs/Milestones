import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-tab',
  templateUrl: './messages-tab.component.html',
  styleUrls: ['./messages-tab.component.css']
})
export class MessagesTabComponent implements OnInit {
  msgList = [{
    title: "welcome",
    date: "25:05:2017 14:20",
    content: "Welcom to the service!@!"
  }, {
    title: "First Day",
    date: "25:05:2017 20:20",
    content: "Remember To fill Your First work Day"
  }
  ]

  constructor() { }

  ngOnInit() {
  }

}
