import {NgModule} from '@angular/core';
import {AfterLoginLayout} from './after.login.layout';
import {BeforeLoginLayout} from './before.login.layout';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FooterLayout} from './footer.layout';
import {NavigationBarLayout} from './navigation.bar.layout';
import {SidebarNavigationLayout} from './sidebar.navigation.layout';

@NgModule({
  declarations:[AfterLoginLayout, BeforeLoginLayout,FooterLayout,NavigationBarLayout,SidebarNavigationLayout],
  imports:[ BrowserModule,
    RouterModule,
    FormsModule],
  exports:[AfterLoginLayout,BeforeLoginLayout,FooterLayout,NavigationBarLayout,SidebarNavigationLayout]
})

export class LayoutModule{}
