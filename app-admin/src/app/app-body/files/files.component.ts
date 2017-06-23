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
     console.log(this.allow());
  }

  allow() {
    return String(this.appBody.user.type)==='0';
  }
  fileEvent(fileInput: any){
    let file = fileInput.target.files[0];
    let fileName = file.name;
    console.log(fileInput);
    firebase.storage().ref().put(fileInput)
    .then(
      (snapshot)=>console.log(snapshot)
    )
}

}
