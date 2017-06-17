import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  private clicked = false;
  @Input() private msg : {title : string , date : string , content : string};
  constructor() { }

  ngOnInit() {
  }

  openMsg(){
    this.clicked = !this.clicked;
  }
  delete(){
    if(confirm("האם אתה בטוח שהנחה רוצה למחוק הודעה זו?")){
        this.msg = null;
    }
  }
}
