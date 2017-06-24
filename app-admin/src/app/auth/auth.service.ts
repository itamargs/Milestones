
import { UserService } from './../users/user.service';
import { Http } from '@angular/http';
import { Injectable, Directive } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Injectable()
export class AuthService{
    token: string;
    error: string;
    user: string;
    admin: string;
    uid: string;
    constructor(private router: Router, private http: Http){
       firebase.database().ref('admin/uid').on('value', (snapshot)=> this.admin = snapshot.val());
    }
    

    signupUser(email: string, password: string, key:string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            response => {firebase.database().ref('users/' + String(key) + '/uid').set(firebase.auth().currentUser.uid)}
        )
        .catch(
            error => window.alert('Error')
            
        )
        
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                
              firebase.auth().currentUser.getIdToken()
                .then(
                     (token: string) => this.token = token
                )
                this.router.navigate(['/main']);  
            }
            
        )
        .catch(
            error => window.alert('אימייל או סיסמא אינם נכונים. נסה שוב')
        )
    }

    signOutUser() {
        return firebase.auth().signOut()
        .then(
            response => {
                this.router.navigate(['/login']);
                this.token = null;
            }
        )
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => 
                this.token = token
        );
        return this.token;
    }

    isAuth() {
        if(this.token == null)
            this.router.navigate(['/login']);
        return this.token != null;
    }

    deleteUser(uid: string) {
        let xml = new XMLHttpRequest();
        xml.open('Post',"https://us-central1-milestones-app.cloudfunctions.net/accountcleanup?key=19b8242abf28bf7e42bc8f38d15f8787b0ed022b&uid=" + uid);
        xml.send(null);
        return xml.status;

    }

    isAdmin() {
        return this.admin===firebase.auth().currentUser.uid;
    }

    resetPass(email: string) {
        firebase.auth().sendPasswordResetEmail(String(email))
        .then(
            response => window.alert('איפוס סיסמא יישלח ברגעים הקרובים לכתובת המייל שלך')
        )
        .catch(
            error => window.alert('שגיאה! אנא בדוק שהזנת את כתובת המייל שלך שרשומה במערכת')
        )
    }

    changePass(newPass: string) {
        firebase.auth().currentUser.updatePassword(newPass)
        .then(
            response => window.alert('הסיסמא שונתה בהצלחה')
        )
        .catch(
            error => window.alert('סיסמא לא שונתה, נסה שוב')
        )
    }


}