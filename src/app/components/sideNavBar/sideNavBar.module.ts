import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sideNavBarComponent } from './sideNavBar';
@NgModule({
  imports: [CommonModule],
  exports: [sideNavBarComponent],
  declarations: [sideNavBarComponent],
  providers: []
})
export class SideNavModule {}