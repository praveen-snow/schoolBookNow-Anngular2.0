import {Component} from "@angular/core";

@Component({
    selector: 'app-navBar',
    template: require('../components/sideNavBar/sideNavBar.html'),
    styleUrls: ['../components/sideNavBar/sideNavBar.scss']
})
export class NavBarComponent{
    textTest = 'School Book';
    userProfileImg = '../../assets/images/praveen.jpg';
    userProfileName = 'Praveen Chundi';
}

//'<nav class="sbw-header-navigator"><h1>{{textTest}}</h1></nav>',