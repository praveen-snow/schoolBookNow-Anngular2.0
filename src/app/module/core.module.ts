import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideNavModule } from '../components/sideNavbar/sideNavbar.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,
    SideNavModule
  ],
  exports: [
    CommonModule, FormsModule, RouterModule,
    SideNavModule
  ],
  declarations: [],
  providers: []
})
export class CoreModule {
}
