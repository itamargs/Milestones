import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AppBodyComponent } from './app-body/app-body.component';
import { JwtHelper } from './JwtHelper.service';
import { AccountService } from './accountService.service';
import { JobHoursComponent } from './app-body/job-hours/job-hours.component';
import { HeaderComponent } from './header/header.component';
import { WorkTableComponent } from './app-body/job-hours/work-table/work-table.component';
import { MessageComponent } from './app-body/messages-tab/message/message.component';
import { MessagesTabComponent } from './app-body/messages-tab/messages-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppBodyComponent,
    JobHoursComponent,
    HeaderComponent,
    WorkTableComponent,
    MessageComponent,
    MessagesTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountService, LoginService, JwtHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
