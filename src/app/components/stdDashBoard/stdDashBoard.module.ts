import { NgModule } from '@angular/core';

import { StudentDashRoutingModule, routedComponents } from './stdDashBoard-routing.module';

@NgModule({
  imports: [StudentDashRoutingModule],
  declarations: [routedComponents]
})
export class StudentDashBoardModule { }
