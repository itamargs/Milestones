import { Messages } from './messages.model';
import { Http } from '@angular/http';
import { AuthService } from './../auth/auth.service';
import { Hours } from './hours.model';
import { DataStorageService } from './../shared/data-storage.service';
import { User } from './user.model';
import { EventEmitter, Injectable } from "@angular/core";

import * as firebase from 'firebase';
@Injectable()
export class UserService {
    usersChanged = new EventEmitter<User[]>();
    userSelected = new EventEmitter<User>(); 
    addSelected = new EventEmitter();
    chartUser = new EventEmitter<User>();
    constructor(private auth: AuthService, private http: Http) {
       this.getData();
    }
    private users: User[] = [
       /* new User('אביאל', 'שמריהו', 123456789, 'aviel@aviel.com', '111', 0,[],null),
        new User('יקיר', 'עמור', 987654321, 'yakir@yakir.com', '111', 1,[],null),
        new User('עידו', 'זקן', 154276809, 'itamar@itamar.com', '111', 0,[],null),
        new User('איתמר', 'גולדשטיין', 154276809, 'itamar@itamar.com', '111', 0,[],null),
        new User('איתמר', 'גולדשן', 154276809, 'itamar@itamar.com', '111', 0,[],null),
        new User('אביאל', 'שמריהו', 123456789, 'aviel@aviel.com', '111', 0,[],null),
        new User('יקיר', 'עמור', 987654321, 'yakir@yakir.com', '111', 1,[],null)*/
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
                                                                 this.users[i].hours[j].totalDays,
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
        console.log(this.users);
        

       /*for(var i=0; i<this.users.length; i++) {
            this.users[i].hours = [];
                    for(var j=0; i<this.users[i].hours.length; j++)
                        this.users[i].hours[j] = new Hours(String(this.users[i].hours[j].date), this.users[i].hours[j].day,this.users[i].hours[j].employer,this.users[i].hours[j].startHour,this.users[i].hours[j].endHour,this.users[i].hours[j].totalHours,this.users[i].hours[j].totalDays);
            
        }*/
        
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
        //var newKey = firebase.database().ref('users').push(user).key
        //this.users.push(user);
        //this.usersChanged.emit(this.users.slice());
        user.key = String(firebase.database().ref('users').push(user).key);
        firebase.database().ref('users/'+user.key + '/key').set(user.key);
        
        
    }

    ff(newh: Hours, user: User) {
        newh.key = String(firebase.database().ref('users/' + String(this.getUsers()[this.getIndex(user)].key) + '/hours').push(newh).key);
      firebase.database().ref('users/' + String(this.getUsers()[this.getIndex(user)].key) + '/hours/' + String(newh.key) + '/key').set(newh.key);
      this.getUser(this.getIndex(user)).hours.push(newh);
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
        
        
    
}