import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
@Component({
  selector:'product-module',
  templateUrl:'./add.product.module.modal.html'
  })

export class AddProductModuleModal implements OnInit{
  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}
