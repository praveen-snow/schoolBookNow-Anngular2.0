import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideNavBarComponent} from './side-nav-bar/sideNavBar';
import {SigninComponent} from './signin/signin';
import {HeaderComponent} from './header/header';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, SideNavBarComponent, SigninComponent],
  exports: [HeaderComponent, SideNavBarComponent, SigninComponent]
})

export class CoreModule {
}