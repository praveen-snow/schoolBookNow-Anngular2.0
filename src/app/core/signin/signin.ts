/**
 * Created by rahul on 4/20/17.
 */

import { Component, OnInit , Input} from '@angular/core';
import { SignInServices } from './signin.service';
import { AppAPI } from 'app/api/app.api';
import { User, SignIn } from './signin.model';

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
  @Input() signIn: SignIn;
  editUser: SignIn = <SignIn>{};
  users: User[];
  constructor(private singInService: SignInServices) { }
  ngOnInit() {
    this.singInService.checkUser()
      .subscribe(users => this.users = users);
  }
  private setEditCharacter(signIn: SignIn) {
    if (signIn) {
      this.signIn = signIn;
      //this.editCharacter = this.entityService.clone(this.character);
    }
  }
  getIn() {
    const userDetails = this.editUser;
    if (userDetails.userId === null || userDetails.passCode === null) {
      return;
    }
    console.log(userDetails);
    // this.characterService.updateCharacter(character)
    //   .subscribe(() => this.toastService.activate(`Successfully saved ${character.name}`));
  }
}
