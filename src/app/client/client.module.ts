import {DashboardComponent} from '../dashboard/dashboard.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {AddClientComponent} from './add.client.component';

@NgModule({
  declarations:[AddClientComponent],
  imports:[ BrowserModule,
    RouterModule,
    FormsModule],
  exports:[AddClientComponent]
})
export class ClientModule {

}
