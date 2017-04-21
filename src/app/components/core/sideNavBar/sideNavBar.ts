import {Component} from '@angular/core';

@Component({
    selector: 'app-navbar',
    template: require('./sideNavBar.html'),
    styleUrls: ['./sideNavBar.scss']
})
export class SideNavBarComponent {
    textTest = 'School Book';
    userProfileImg = '../../assets/images/praveen.jpg';
    userProfileName = 'Praveen Chundi';
}
