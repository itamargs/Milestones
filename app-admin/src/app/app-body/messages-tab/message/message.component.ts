import { MessagesTabComponent } from './../messages-tab.component';
import { AppBodyComponent } from './../../app-body.component';
import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  private clicked = false;
  @Input() private msg;
  constructor(private appBody: AppBodyComponent, private msgTab: MessagesTabComponent) { }

  ngOnInit() {
  }

  openMsg(){
    if(!this.msg.status)
      this.msgTab.index--;
    this.msg.status = true;
    firebase.database().ref('users/' + String(this.appBody.user.key) + '/messages/' + String(this.msg.key) + '/status').set(true);
    this.clicked = !this.clicked;
  }
  delete(){
    
    if(confirm("האם אתה בטוח שהנחה רוצה למחוק הודעה זו?")){
        firebase.database().ref('users/' + String(this.appBody.user.key) + '/messages/' + String(this.msg.key)).remove();
        this.msg = null;
    }
  }
}
