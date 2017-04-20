import { NgModule } from '@angular/core';

import { studentDashRoutingModule, routedComponents }   from './stdDashBoard-routing.module';

@NgModule({
  imports: [studentDashRoutingModule],
  declarations: [routedComponents]
})
export class studentDashBoardModule { }