import 'zone.js/dist/zone';
import 'reflect-metadata';

import {Component} from '@angular/core';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ThreeSixtySliderAngular5} from '../../../src/ThreeSixtySliderAngular5';


@Component({
    selector: 'app',
    entryComponents: [ThreeSixtySliderAngular5],
    template: `<div>
                   <input (keyup)="onKeyUp(input)" #input placeholder="Type Here">
                   {{message}}
                   <hello-world></hello-world>
               </div>`
})
export class App {

    message = "";

    onKeyUp(input) {
        this.message = input.value;
    }

}


platformBrowserDynamic().bootstrapModule(App);
