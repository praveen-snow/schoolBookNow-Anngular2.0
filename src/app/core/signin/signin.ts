/**
 * Created by rahul on 4/20/17.
 */

import { Component, OnInit } from '@angular/core';
import { SignInServices } from './signin.service';
import { AppAPI } from 'app/api/app.api';
import { User } from './signin.model';

@Component({
  moduleId: module.id,
  selector: 'app-sign-in',
  template: require('./signin.html'),
  styleUrls: ['./signin.scss'],
  providers: [ SignInServices, AppAPI ]
})

export class SigninComponent implements OnInit {
  textTest = 'School Book';
  userProfileImg = '../../assets/images/praveen.jpg';
  userProfileName = 'Praveen Chundi';
  users: User[];
  constructor(private singInService: SignInServices) { }
  ngOnInit() {
    this.singInService.checkUser()
      .subscribe(users => this.users = users);
  }
}
