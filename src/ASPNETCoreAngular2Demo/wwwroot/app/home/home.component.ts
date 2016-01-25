import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    directives: [CORE_DIRECTIVES]
})

export class HomeComponent {

    public message: string;

    constructor() {
        this.message = "Hello from HomeComponent constructor";
    }
}
