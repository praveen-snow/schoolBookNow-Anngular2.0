import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { studentBoardComponent } from './student-dash-board';

const routes: Routes = [
  { path: '', component: studentBoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class studentDashRoutingModule { }

export const routedComponents = [studentBoardComponent];
