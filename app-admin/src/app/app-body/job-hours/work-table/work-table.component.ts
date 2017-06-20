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
 private edit: {
    date: String,
    employer: String,
    startHour: String,
    endHour: String,
    totalHours: String
  };

days = [];

  constructor(private a: AppBodyComponent) { }

  ngOnInit() {
    this.days = this.a.user.hours;
  }

  onEdit(day: any) {
    this.edit = day;

  }

  onDelete(day: any){
    console.log(day.key);
    firebase.database().ref('users/' + String(this.a.user.key) + '/hours' + String(day.key)).remove();
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.edit.date = form.value.date;
    this.edit.employer = form.value.employer;
    this.edit.endHour = form.value.endHour;
    this.edit.startHour = form.value.startHour;
    this.edit.totalHours = form.value.totalHours;
     console.log(this.edit);
    this.edit = null;
  }


}
