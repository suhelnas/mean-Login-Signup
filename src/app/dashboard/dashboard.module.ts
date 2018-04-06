import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  declarations:[DashboardComponent],
  imports:[ BrowserModule,
    RouterModule,
    FormsModule],
  exports:[DashboardComponent]
})

export class DashboardModule{}
