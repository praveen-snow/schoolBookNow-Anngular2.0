import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideNavModule } from './sideNavbar/sideNavbar.module';
import { headerModule } from './header/header.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,
    SideNavModule,headerModule
  ],
  exports: [
    CommonModule, FormsModule, RouterModule,
    SideNavModule,headerModule
  ],
  declarations: [],
  providers: []
})
export class CoreModule {
}
