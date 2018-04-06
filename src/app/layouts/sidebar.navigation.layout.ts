import {Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector:'sidebar-navigation',
  templateUrl:'./sidebar.navigation.layout.html',
  styleUrls:['./sidebar.navigation.layout.css']
})

export class SidebarNavigationLayout {

  @Output() openSideNav = new EventEmitter<any>();
  constructor(){

  }
  closeNav(){
    this.openSideNav.emit(false);
  }

}
