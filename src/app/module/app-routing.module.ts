import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

// import { AuthGuard, CanDeactivateGuard, UserProfileService } from './core';

import { studentBoardComponent } from '../components/stdDashBoard/studentDashBoard';

/***************************************************************
* Lazy Loading to Eager Loading
*
* 1. Remove the module and NgModule imports in `app.module.ts`
*
* 2. Remove the lazy load route from `app.routing.ts`
*
* 3. Change the module's default route path from '' to 'pathname'
*****************************************************************/
const routes: Routes = [
  { path: 'sbw-student/dashboard', component: studentBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/