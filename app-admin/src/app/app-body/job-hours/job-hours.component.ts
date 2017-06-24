import { Hours } from './../../users/hours.model';
import { AppBodyComponent } from './../app-body.component';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-hours',
  templateUrl: './job-hours.component.html',
  styleUrls: ['./job-hours.component.css']
})
export class JobHoursComponent implements OnInit {

  constructor(private appBody: AppBodyComponent) { }

  ngOnInit() {
  }

  add(form: NgForm){
    
    let dateLen = form.value.date.length;
    let newDate = form.value.date.slice(dateLen-2, dateLen) + '/'
                  + form.value.date.slice(dateLen-5, dateLen-3) + '/'
                  + form.value.date.slice(0, dateLen-6);
    
    let newDay = new Hours(newDate, form.value.day, form.value.employer, form.value.startHour, form.value.endHour, form.value.totalHours,'');
    newDay.key = firebase.database().ref('users/' + String(this.appBody.user.key)).child('hours').push(newDay).key;
    firebase.database().ref('/users/' + String(this.appBody.user.key) +'/hours/' + newDay.key + '/key').set(newDay.key);
    this.appBody.user.hours.push(newDay);
    form.reset();

  }
}
