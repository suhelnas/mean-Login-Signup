import {Component, ViewChild} from '@angular/core';
import {LayoutInteractionSharedService} from './services/layout.interaction.shared.service';
import {SidebarNavigationLayout} from './sidebar.navigation.layout';

@Component({
  selector:'after-login',
  templateUrl:'./after.login.layout.html',
})
export class AfterLoginLayout{
  sideNav:boolean = false;
  constructor(){

  }
  openSideNavigation(open){
    this.sideNav = open;
  }
}
