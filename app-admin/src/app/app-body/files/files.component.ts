import { AppBodyComponent } from './../app-body.component';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  
  constructor(private appBody: AppBodyComponent) { }

  ngOnInit() {
     
  }

  allow() {
    return String(this.appBody.user.type)==='0';
  }
  

}
