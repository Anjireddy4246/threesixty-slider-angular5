
import {Component} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ThreeSixtySliderAngular5 } from '../../../lib/ThreeSixtySliderAngular5';


@Component({
    selector: 'app',
    entryComponents: [ThreeSixtySliderAngular5],
    template: `<input placeholder="Type Hello World!" (keyup)="onKeyUp(input)" #input>
               {{message}}
               <hello-world></hello-world>
               `
})
export class App {

    message = "";

    onKeyUp(input) {
        this.message = input.value;
    }
}
platformBrowserDynamic().bootstrapModule(App)

