import {Routes} from '@angular/router';
import {RegisterComponent} from './authentication/register.component';
import {LoginComponent} from './authentication/login.component';
import {ForgetPassword} from './authentication/forget.password';
import {OtpComponent} from './authentication/otp.component';
import {ResetPasswordComponent} from './authentication/reset.password.component';
import {AddProductComponent} from './product/add.product.component';
import {AddUserComponent} from './user/add.user.component';
import {BeforeLoginLayout} from './layouts/before.login.layout';
import {AfterLoginLayout} from './layouts/after.login.layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddClientComponent} from './client/add.client.component';

export const ROUTES:Routes =[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {
    path: '', component: BeforeLoginLayout,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'forget/password', component: ForgetPassword},
      {path: 'verify/otp', component: OtpComponent},
      {path: 'reset/password', component: ResetPasswordComponent}
    ]
  },
    {path:'',component:AfterLoginLayout,
    children: [
      {path:'dashboard',component:DashboardComponent},
      {path: 'add/product', component: AddProductComponent},
      {path: 'add/user', component: AddUserComponent},
      {path: 'add/client', component: AddClientComponent}
      ]
}
]
