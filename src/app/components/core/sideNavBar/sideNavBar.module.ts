import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sideNavBarComponent } from './sideNavBar';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [sideNavBarComponent],
  declarations: [sideNavBarComponent],
  providers: []
})
export class SideNavModule {}