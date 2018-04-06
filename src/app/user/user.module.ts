import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AddUserComponent} from './add.user.component';



@NgModule({
  declarations: [
     AddUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule

  ],
  exports: [
    AddUserComponent
  ]
})

export class UserModule{}
