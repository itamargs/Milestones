import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/login/reset/reset.component';
import { MessagesTabComponent } from './app-body/messages-tab/messages-tab.component';
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
    { path: 'reset', component: ResetComponent },
    { path: 'emek', component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'katif', component: UsersComponent, canActivate: [AuthGuard]},
    { path: 'files', component: UsersComponent, canActivate: [AuthGuard]},
    { path: 'hours', component: UsersComponent, canActivate: [AuthGuard]},
    { path: 'user', component:UsersComponent, canActivate: [AuthGuard]},
    { path: 'messages', component:UsersComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}