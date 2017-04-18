import {Component} from "@angular/core";

@Component({
    selector: 'app-navBar',
    template: require('../components/sideNavBar/sideNavBar.html'),
    styleUrls: ['../components/sideNavBar/sideNavBar.css']
})
export class NavBarComponent{
    textTest = 'School Book';
}

//'<nav class="sbw-header-navigator"><h1>{{textTest}}</h1></nav>',