import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { UserService } from './users/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserDetailsComponent } from './users/users-list/user-details/user-details.component';
import { UserAddComponent } from './users/users-list/user-add/user-add.component';
import { FilterListPipe } from './users/users-list/filter-list.pipe';
import { LoginComponent } from './auth/login/login.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { JobHoursComponent } from './app-body/job-hours/job-hours.component';
import { WorkTableComponent } from './app-body/job-hours/work-table/work-table.component';
import { StartComponent } from './start/start.component';
import { MessagesTabComponent } from './app-body/messages-tab/messages-tab.component';
import { FilesComponent } from './app-body/files/files.component';
import { MessageComponent } from './app-body/messages-tab/message/message.component';
import { ResetComponent } from './auth/login/reset/reset.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserMessageComponent } from './users/users-list/user-message/user-message.component';
import { MessageFormComponent } from './users/users-list/user-message/message-form/message-form.component';
import { FilterPipe } from './users/users-list/user-message/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AdminNavbarComponent,
    UsersComponent,
    UsersListComponent,
    UserDetailsComponent,
    UserAddComponent,
    FilterListPipe,
    LoginComponent,
    UserNavbarComponent,
    AppBodyComponent,
    JobHoursComponent,
    WorkTableComponent,
    StartComponent,
    MessagesTabComponent,
    FilesComponent,
    MessageComponent,
    ResetComponent,
    RegisterComponent,
    UserMessageComponent,
    MessageFormComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [UserService,  AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
