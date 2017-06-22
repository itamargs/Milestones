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
  constructor(private appBody: AppBodyComponent) { }

  ngOnInit() {
  }

  openMsg(){
    this.msg.status = true;
    firebase.database().ref('users/' + String(this.appBody.user.key) + '/messages/' + String(this.msg.key) + '/status').set(true);
    this.clicked = !this.clicked;
  }
  delete(){
    console.log(this.msg.key);
    if(confirm("האם אתה בטוח שהנחה רוצה למחוק הודעה זו?")){
        firebase.database().ref('users/' + String(this.appBody.user.key) + '/messages/' + String(this.msg.key)).remove();
        this.msg = null;
    }
  }
}
