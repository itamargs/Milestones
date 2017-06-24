import { UserService } from './../../../user.service';
import { NgForm } from '@angular/forms';
import { User } from './../../../user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  @Input() users: User[]
  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }

  onSend(form: NgForm) {
    let newDate = '';
    newDate = String(new Date().getDate() + '/' + (new Date().getMonth()+1) + '/'
                + new Date().getFullYear() + ' | ');
    if(new Date().getHours() < 10)
      newDate += '0';
    newDate += String(new Date().getHours()) + ':';
    if(new Date().getMinutes() < 10)
      newDate += '0';
    newDate += String(new Date().getMinutes());
    this.userService.sendUserMessage(this.users, form.value.title, form.value.body, newDate);
    form.reset();
    window.alert('הודעה נשלחה בהצלחה!')
  }


}
