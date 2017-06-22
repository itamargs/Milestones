import { NgForm } from '@angular/forms';
import { AppBodyComponent } from './../../app-body.component';
import { User } from './../../../users/user.model';
import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-work-table',
  templateUrl: './work-table.component.html',
  styleUrls: ['./work-table.component.css']
})
export class WorkTableComponent implements OnInit {
  private types = [1,2,3];
 private edit: {
    date: String,
    day: string,
    employer: String,
    startHour: String,
    endHour: String,
    totalHours: String,
    key: string
  };

days = [];

  constructor(private a: AppBodyComponent) { }

  ngOnInit() {
    this.days = this.a.user.hours;
    this.days.sort((a, b)=>{
    if(a.date < b.date) return -1;
    if(a.date > b.date) return 1;
    return 0;
})
    console.log(this.days);
  }

  callType(value){
    console.log(value);
    
  }

  onEdit(day: any) {
    this.edit = day;
    console.log(this.edit);
  }

  onDelete(day: any){
    var warning = confirm("אתה בטוח?");
    if(warning){
    firebase.database().ref('users/' + String(this.a.user.key) + '/hours/' + String(day.key)).remove();
    this.days[this.days.indexOf(day)]
    this.days.splice(this.days.indexOf(day), 1);}
  }

  onSubmit(form: NgForm) {
    console.log(form);
    let dateLen = form.value.date.length;
    let newDate = form.value.date.slice(dateLen-2, dateLen) + '/'
                  + form.value.date.slice(dateLen-5, dateLen-3) + '/'
                  + form.value.date.slice(0, dateLen-6);
    this.edit.date = newDate;
    this.edit.day = form.value.day;
    this.edit.employer = form.value.employer;
    this.edit.endHour = form.value.endHour;
    this.edit.startHour = form.value.startHour;
    this.edit.totalHours = form.value.totalHours;
    firebase.database().ref('users/' + String(this.a.user.key) + '/hours/' + String(this.edit.key) + '/date').set(newDate);
    firebase.database().ref('users/' + String(this.a.user.key) + '/hours/' + String(this.edit.key) + '/day').set(form.value.day);
    firebase.database().ref('users/' + String(this.a.user.key) + '/hours/' + String(this.edit.key) + '/employer').set(form.value.employer);
    firebase.database().ref('users/' + String(this.a.user.key) + '/hours/' + String(this.edit.key) + '/endHour').set(form.value.endHour);
    firebase.database().ref('users/' + String(this.a.user.key) + '/hours/' + String(this.edit.key) + '/startHour').set(form.value.startHour);
    firebase.database().ref('users/' + String(this.a.user.key) + '/hours/' + String(this.edit.key) + '/totalHours').set(form.value.totalHours);
    this.edit = null;
  }


}
