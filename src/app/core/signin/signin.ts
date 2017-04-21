/**
 * Created by rahul on 4/20/17.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: require('./signin.html'),
  styleUrls: ['./signin.scss']
})

export class SigninComponent {
  textTest = 'School Book';
  userProfileImg = '../../assets/images/praveen.jpg';
  userProfileName = 'Praveen Chundi';
}
