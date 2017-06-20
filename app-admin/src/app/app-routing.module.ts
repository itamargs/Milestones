import { AppBodyComponent } from './app-body/app-body.component';
import { JobHoursComponent } from './app-body/job-hours/job-hours.component';
import { WorkTableComponent } from './app-body/job-hours/work-table/work-table.component';
import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'type0', component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'type1', component: UsersComponent, canActivate: [AuthGuard]},
    { path: 'msg', component: UsersComponent, canActivate: [AuthGuard]},
    { path: 'user', component:UsersComponent, canActivate: [AuthGuard], children: [
    { path: 'report', component:AppBodyComponent, canActivate: [AuthGuard]}]},
    { path: 'files', component:UsersComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}