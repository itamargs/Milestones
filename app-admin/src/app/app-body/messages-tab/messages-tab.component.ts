import { AppBodyComponent } from './../app-body.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-tab',
  templateUrl: './messages-tab.component.html',
  styleUrls: ['./messages-tab.component.css']
})
export class MessagesTabComponent implements OnInit {
  msgList = []
  index = 0;
  constructor(private appBody: AppBodyComponent) { }

  ngOnInit() {
    this.msgList = this.appBody.user.messages;
    for(var i=0; i<this.msgList.length; i++)
      if(!this.msgList[i].status)
        this.index++;

  }

}
