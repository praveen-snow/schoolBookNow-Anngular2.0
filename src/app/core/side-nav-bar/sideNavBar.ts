import {Component} from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    template: require('./side-nav-bar.html'),
    styleUrls: ['./sideNavBar.scss']
})

export class SideNavBarComponent {
    textTest = 'School Book';
    userProfileImg = '../../assets/images/praveen.jpg';
    userProfileName = 'Praveen Chundi';
}
