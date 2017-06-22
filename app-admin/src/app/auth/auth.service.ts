import { UserService } from './../users/user.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Injectable()
export class AuthService{
    token: string;
    error: string;
    admin: string;
    adminEmail: string;
    adminPass: string;
    constructor(private router: Router, private http: Http){
       firebase.database().ref('admin/uid').on('value', (snapshot)=> this.admin = snapshot.val());
       
             console.log(firebase.auth().currentUser);   
    }
    

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            response => {firebase.auth().signOut()
                         this.signinUser(String(this.adminEmail), String(this.adminPass))})
        .catch(
            error => {this.error = error.message}
            
        )
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
              firebase.auth().currentUser.getToken()
                .then(
                     (token: string) => this.token = token
                )
                
                 if(this.isAdmin()){
                     this.adminEmail = email;
                     this.adminPass = password;
                    this.router.navigate(['/emek']);
                 }
                else
                    this.router.navigate(['/user']);
                    
            }
        )
        .catch(
            error => this.error=error.message
        )
    }

    signOutUser() {
        console.log(firebase.auth().currentUser.uid);
        return firebase.auth().signOut()
        .then(
            response => {
                this.router.navigate(['/login']);
                this.token = null;
            }
        )
    }

    getToken() {
        firebase.auth().currentUser.getToken()
        .then(
            (token: string) => 
                this.token = token
        );
        return this.token;
    }

    isAuth() {
        console.log(firebase.auth().currentUser);
        if(this.token == null)
            this.router.navigate(['/login']);
        return this.token != null;
    }

    deleteUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            (response)=>{firebase.auth().currentUser.delete()
                        firebase.auth().signOut()
                         this.signinUser(String(this.adminEmail), String(this.adminPass))}
            );
        this.signinUser(String(this.adminEmail), String(this.adminPass));

    }

    isAdmin() {
        return this.admin===firebase.auth().currentUser.uid;
    }

    resetPass(email: string) {
        firebase.auth().sendPasswordResetEmail(String(email)).then(
            error=>console.log(error)
        )
    }

}