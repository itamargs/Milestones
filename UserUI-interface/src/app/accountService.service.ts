import { JwtHelper } from './JwtHelper.service';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';
@Injectable()
export class AccountService {
    private userLogged_inKey: string;
    private userType : string;
    private userUID : string;
    private logged_in = new EventEmitter<boolean>();

    constructor(private LoginService: LoginService, 
                private JwtHelper : JwtHelper) {
        this.LoginService.loggedStat.subscribe((loggedStat: { login: boolean, loggedKey: string }) => {
            this.userLogged_inKey = loggedStat.loggedKey;
            //test part start
            var temp = this.JwtHelper.decodeToken(this.userLogged_inKey);
            this.userUID = temp.UID;
            this.userType = temp.Type;
            console.log( this.userUID);
            console.log( this.userType);
            //test part end
            this.logged_in.emit(loggedStat.login);
        })

    }
    Logged(): EventEmitter<boolean> {
        return this.logged_in;
    }
    getUserKey() {
        return this.userLogged_inKey;
    }
    setUserKey(userLogged_inKey: string) {
        this.userLogged_inKey = userLogged_inKey;
        console.log("user Key is Set " + this.getUserKey())
    }
}