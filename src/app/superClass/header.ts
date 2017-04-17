import {Component} from "@angular/core";

@Component({
    selector: 'app-header',
    template: require('../components/header/header.html'),
    styleUrls: ['../components/header/header.css']
})
export class HeaderComponent{
    textTest = 'Hello World';
}

//'<nav class="sbw-header-navigator"><h1>{{textTest}}</h1></nav>',