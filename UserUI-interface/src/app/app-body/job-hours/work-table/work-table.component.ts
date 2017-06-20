import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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


  days = [{
    date: "01/04/2016",
    employer: "יקיר",
    startHour: "06:00",
    endHour: "16:00",
    totalHours: "10"
  }, {
    date: "21/11/2016",
    employer: "יקיר",
    startHour: "06:00",
    endHour: "16:00",
    totalHours: "10"
  }, {
    date: "21/11/2016",
    employer: "עמוס",
    startHour: "16:00",
    endHour: "20:45",
    totalHours: "4:45"
  }];
  constructor() { }

  ngOnInit() {
  }

  onEdit(day: any) {
    this.edit = day;

  }

  onDelete(day: any){
    console.log(this.days[0]);
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
