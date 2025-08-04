import { TypeofExpression } from '@angular/compiler';
import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: false, //by default true in angular 19+ & not needed to define
    //   template: '<h1>Hello world </h1>', this can also work but not recommended
    templateUrl: './header.component.html',
    //different properties for css
    //style, styles, styleUrl, styleUrls
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

}