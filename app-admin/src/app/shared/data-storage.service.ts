import { User } from './../users/user.model';
import { UserService } from './../users/user.service';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import * as firebase from 'firebase';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private userService: UserService){}

    storeUsers(user: User, index: number) {console.log();
       
        //firebase.database().ref('users').push(user);
        //console.log(uploadUser);
        //return this.http.put('https://milestones-app.firebaseio.com/users/2.json', user);
    }

    getd() {
        var csnapshot = [];
        firebase.database().ref('users').child('-KmeudfRCAW8o_I1IWIX/hours').set('dddd')
        console.log(firebase.database().ref('users/-KmbxobnmNXD2_B8eNgw').ref.once('value', (snapshot)=>{console.log(snapshot.val())}));
        console.log(firebase.database().ref('users').on('value' , (snapshot)=>{console.log(snapshot.val())}));
    }

    setUser(user: User) {
        //const body = JSON.stringify(user);
       // return this.http.put('https://milestones-app.firebaseio.com/users.json', body);
        
    }
private gg=[];
    ss() {
        //firebase.database().ref('users').on('child_added', (snapshot) => {this.gg.push(snapshot.val())})
        //console.log(this.gg);
    }
    

}