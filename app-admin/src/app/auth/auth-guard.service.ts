import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import * as firebase from 'firebase';
@Injectable()
export class AuthGuard implements CanActivate {
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        return this.authService.isAuth();
    }


    constructor(private authService: AuthService) {}
        
        CanActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
            return this.authService.isAuth();
        
    }
}