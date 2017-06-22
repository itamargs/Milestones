import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     
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
