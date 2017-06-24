import { Messages } from './messages.model';
import { Http } from '@angular/http';
import { AuthService } from './../auth/auth.service';
import { Hours } from './hours.model';
import { User } from './user.model';
import { EventEmitter, Injectable } from "@angular/core";

import * as firebase from 'firebase';
@Injectable()
export class UserService {
    usersChanged = new EventEmitter<User[]>();
    userSelected = new EventEmitter<User>(); 
    addSelected = new EventEmitter();
    msgSelected = new EventEmitter();
    chartUser = new EventEmitter<User>();
    constructor(private auth: AuthService, private http: Http) {
       this.getData();
    }
    private users: User[] = [
      
    ];

    findUser(user: User) {
        return String(user.email)===String(firebase.auth().currentUser.email);
    }
    
    getData() {
        firebase.database().ref('users')
        .on('child_added', (snapshot) => {
            this.users.push(snapshot.val())
            
            for(var i=0; i<this.users.length;i++) {
                this.users[i] = new User(this.users[i].firstName,
                                         this.users[i].lastName,
                                         this.users[i].id,
                                         this.users[i].email,
                                         this.users[i].uid,
                                         this.users[i].type,
                                         [],
                                         [],
                                         this.users[i].key)

                 firebase.database().ref('users/' + String(this.users[i].key) + '/hours')
                 .on('child_added', (snapshot)=> {
                    this.users[i].hours.push(snapshot.val())
                         for(var j=0; j<this.users[i].hours.length; j++){
                              this.users[i].hours[j] = new Hours(this.users[i].hours[j].date,
                                                                 this.users[i].hours[j].day,
                                                                 this.users[i].hours[j].employer,
                                                                 this.users[i].hours[j].startHour,
                                                                 this.users[i].hours[j].endHour,
                                                                 this.users[i].hours[j].totalHours,
                                                                 this.users[i].hours[j].key)}
                }
                );
                 firebase.database().ref('users/' + String(this.users[i].key) + '/messages')
                 .on('child_added', (snapshot)=> {
                    this.users[i].messages.push(snapshot.val())
                         for(var j=0; j<this.users[i].messages.length; j++){
                              this.users[i].messages[j] = new Messages(this.users[i].messages[j].title,
                                                                        this.users[i].messages[j].date,
                                                                        this.users[i].messages[j].content,
                                                                        this.users[i].messages[j].key,
                                                                        this.users[i].messages[j].status)}
                }
                );
                }
                    }
                );
        
        
    }

    getUsers() {
        return this.users;
    }

    getUser(index: number) {
        return this.users[index];
    }

    getIndex(user: User) {
        return this.users.indexOf(user);
    }

    removeUser(index: number) {
        
        if(confirm("משתמש זה יימחק!!!")) {
        this.auth.deleteUser(String(this.users[index].uid));
        firebase.database().ref('users/'+ String(this.users[index].key)).remove();
        this.users.splice(index, 1);
        this.usersChanged.next(this.users.slice());
        }
    }

    addUser(user: User) {
        user.key = String(firebase.database().ref('users').push(user).key);
        firebase.database().ref('users/'+user.key + '/key').set(user.key);
        
        
    }

    userAllowed(id: number) {
        let isAllowed;
        firebase.database().ref('users')
        .on('child_added', (snapshot)=> {
            if(String(snapshot.child('id').val())===String(id))
                isAllowed = snapshot.key;
         })
         return isAllowed;
    }

    registerUser(key: string, email: string, password: string) {
        firebase.database().ref('users/' + key + '/email').set(email);
        this.auth.signupUser(email, password, key);
        window.alert('הרישום בוצע בהצלחה');
    }

    sendUserMessage(users: User[], title:string, body:string, date:string) {
        let newMsg = new Messages(title, date, body, '', false);
        for(var i=0; i<users.length; i++) {
            newMsg.key = String(firebase.database().ref('users/' + String(users[i].key) + '/messages').push(newMsg).key);
            firebase.database().ref('users/' + String(users[i].key) + '/messages/' + String(newMsg.key) + '/key').set(newMsg.key);
        }
    }
        
        
    
}