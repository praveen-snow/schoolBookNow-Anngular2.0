import {Component} from "@angular/core";

@Component({
    selector: 'app-header',
    template: '<nav class="sbw-header-navigator">{{textTest}}</nav>',
    styleUrls: ['../components/header/header.css']
})
export class HeaderComponent{
    textTest = 'Hello World';
}