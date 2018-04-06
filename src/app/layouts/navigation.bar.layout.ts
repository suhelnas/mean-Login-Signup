import {Component, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector:'navigation-bar',
  templateUrl:'./navigation.bar.layout.html'
})

export class NavigationBarLayout {
  @Output() openSideNav = new EventEmitter<any>();

constructor(private eRef: ElementRef){}

  openSideBar(){
  this.openSideNav.emit(true);
  }

}
