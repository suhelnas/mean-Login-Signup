
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';
import {FormsModule} from '@angular/forms';
import {ForgetPassword} from './forget.password';
import {OtpComponent} from './otp.component';
import {ResetPasswordComponent} from './reset.password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPassword,
    OtpComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule

  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ForgetPassword,
    OtpComponent,
    ResetPasswordComponent
  ]
})

export class AuthModule {}
