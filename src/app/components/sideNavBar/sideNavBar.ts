import {Component} from "@angular/core";

@Component({
    selector: 'app-navBar',
    template: require('./sideNavBar.html'),
    styleUrls: ['./sideNavBar.scss']
})
export class NavBarComponent{
    textTest = 'School Book';
    userProfileImg = '../../assets/images/praveen.jpg';
    userProfileName = 'Rahul Rayineni';
}

//'<nav class="sbw-header-navigator"><h1>{{textTest}}</h1></nav>',
