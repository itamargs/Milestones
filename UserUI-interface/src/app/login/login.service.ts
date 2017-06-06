import { Injectable, EventEmitter } from "@angular/core"

export class LoginService {
    private loggedKey: string = null;
    private logged_in: boolean = false;
    private users = { yakir: '12345', avial: '54321' };
    loggedStat = new EventEmitter<{ login: boolean, loggedKey: string }>();


    login(user: string, password: string) {
        this.loggedKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOiIxMjM0NWFiY2RlIiwiVHlwZSI6InNvbGRlciJ9.lnlKTYzh18LAqnn2Smvev6j1Im-fxNz-XSn4eBaLXj4";
        console.log("user is: " + user + " password: " + password);
        if (this.users[user] === password) {
            console.log("currect");
            this.logged_in = true;
            this.loggedStat.emit({ login: this.logged_in, loggedKey: this.loggedKey });
        }else{
            console.log("incurrect");
        }
    }
}