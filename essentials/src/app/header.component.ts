import { TypeofExpression } from '@angular/compiler';
import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true, //by default true in angular 19+ & not needed to define
    //   template: '<h1>Hello world </h1>', this can also work but not recommended
    templateUrl: './header.component.html'
})

export class HeaderComponent {

}