import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-table',
  templateUrl: './work-table.component.html',
  styleUrls: ['./work-table.component.css']
})
export class WorkTableComponent implements OnInit {
days = [{
  date: "01/04/2016",
  employer: "יקיר",
  startHour: "06:00",
  endHour: "16:00",
  totalHours: "10"
},{
  date: "21/11/2016",
  employer: "יקיר",
  startHour: "06:00",
  endHour: "16:00",
  totalHours: "10"
},{
  date: "21/11/2016",
  employer: "עמוס",
  startHour: "16:00",
  endHour: "20:45",
  totalHours: "4:45"
}];
  constructor() { }

  ngOnInit() {
  }

}
