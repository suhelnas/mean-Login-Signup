import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {AuthModule} from './authentication/auth.module';
import {ROUTES} from './app.routes';
import {AuthService} from './authentication/services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ProductModule} from './product/product.module';
import {UserModule} from './user/user.module';
import {LayoutModule} from './layouts/layout.module';
import {AddProductModuleModal} from './product/add.product.module.modal';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {ClientModule} from './client/client.module';
import { ModalModule } from 'ngx-bootstrap';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule,ModalModule.forRoot(),AuthModule,ProductModule,UserModule,
    RouterModule.forRoot(ROUTES),ClientModule,
    HttpClientModule,LayoutModule,DashboardModule
  ],
  providers: [AuthService],
  entryComponents: [
    AddProductModuleModal
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
