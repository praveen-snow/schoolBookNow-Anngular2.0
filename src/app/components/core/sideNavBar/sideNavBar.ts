import {Component} from "@angular/core";

@Component({
    selector: 'app-navBar',
    template: require('./sideNavBar.html'),
    styleUrls: ['./sideNavBar.scss']
})
export class sideNavBarComponent{
    textTest = 'School Book';
    userProfileImg = '../../assets/images/praveen.jpg';
    userProfileName = 'Praveen Chundi';
}