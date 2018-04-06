import {Component} from '@angular/core';
import {AddProductModuleModal} from './add.product.module.modal';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector:'add-product',
  templateUrl:'./add.product.component.html',
  styleUrls: ['./add.product.component.css']
})

export class AddProductComponent{
  Product = {
    productName: null,
    hostedOn:null,
    productUrl:null,
    serverIp:null,
    servercredentials:null,
    ProductModule:[{
      moduleName:null,
      teamWorked:null,
      teamWorking:null,
      lastUpdated:null,
    }]
  }
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService){

  }
  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(AddProductModuleModal, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
