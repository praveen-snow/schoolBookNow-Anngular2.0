/**
 * Created by rahul on 4/20/17.
 */

import {Component} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'app-sign-in',
  template: require('./signin.html'),
  styleUrls: ['./signin.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
    /*trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])*/
  ]
  styleUrls: ['./signin.scss'],
  providers: [ SignInServices, AppAPI ]
})

export class SigninComponent implements OnInit {
  textTest = 'School Book';
  userProfileImg = '../../assets/images/praveen.jpg';
  userProfileName = 'Praveen Chundi';
  state = 'inactive';
  section= false;
  updateState() {
      this.section = true;
      this.state = 'active';
  }
  users: User[];
  constructor(private singInService: SignInServices) { }
  ngOnInit() {
    this.singInService.checkUser()
      .subscribe(users => this.users = users);
  }
}
