import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AddProductComponent} from './add.product.component';
import {AddProductModuleModal} from './add.product.module.modal';




@NgModule({
  declarations: [
   AddProductComponent,AddProductModuleModal
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule

  ],
  exports: [
   AddProductComponent,AddProductModuleModal
  ]
})

export class ProductModule{}
