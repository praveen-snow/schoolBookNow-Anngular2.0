import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//compontent imports
import { AppComponent } from '../superClass/backDrop';
import { HeaderComponent } from '../superClass/header';
import { NavBarComponent } from '../superClass/navBar';
import { studentBoardComponent } from '../superClass/studentDashBoard';

const appRoutes: Routes = [
  { path: 'sbw-student/dashboard', component: studentBoardComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    studentBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// { path: 'hero/:id',      component: HeroDetailComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
//   { path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
//   { path: '**', component: PageNotFoundComponent }