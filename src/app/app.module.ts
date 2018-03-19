import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login1/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { CreateuserComponent } from './components/createuser/createuser.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    RegisterComponent,
    DashboardComponent,
    ListusersComponent,
    CreateuserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
