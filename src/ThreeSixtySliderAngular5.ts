import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Input } from '@angular/core/src/metadata/directives';
@Component({
    selector: 'threesixty-slider-angular5',
    styles: [`
    .threesixty {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}
.threesixty .threesixty_images {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
}
.threesixty .threesixty_images img {
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
}
.threesixty .threesixty_images img.previous-image {
  visibility: hidden;
 }
.threesixty .threesixty_images img.current-image {
  visibility: visible;
 }
.threesixty .spinner {
  width: 60px;
  display: block;
  margin: 0 auto;
  height: 30px;
  background: #333;
  background: rgba(0, 0, 0, 0.7);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
.threesixty .spinner span {
  font-family: Arial, "MS Trebuchet", sans-serif;
  font-size: 12px;
  font-weight: bolder;
  color: #FFF;
  text-align: center;
  line-height: 30px;
  display: block;
}
.threesixty .nav_bar {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 11;
}
.threesixty .nav_bar a {
  display: block;
  width: 32px;
  height: 32px;
  float: left;
  background-image: url(data:image/png;base64,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) no-repeat;
  text-indent: -99999px;
}
.threesixty .nav_bar a.nav_bar_play {
  background-position: 0 0 !important;
}
.threesixty .nav_bar a.nav_bar_previous {
  background-position: 0 -73px !important;
}
.threesixty .nav_bar a.nav_bar_stop {
  background-position: 0 -37px !important;
}
.threesixty .nav_bar a.nav_bar_next {
  background-position: 0 -104px !important;
}
/* html */
.threesixty:-webkit-full-screen {
  background: #ffffff;
  width: 100%;
  height: 100%;
  margin-top: 0;
  padding-top: 200px;
}
.threesixty:-moz-full-screen {
  background: #ffffff;
  width: 100%;
  height: 100%;
  margin-top: 0;
  padding-top: 200px;
}
    `],
    template: `
    <div class="threesixty">
    <div class="spinner">
        <span>0%</span>
    </div>
    <ol class="threesixty_images"></ol>
</div> 
    `
})
export class ThreeSixtySliderAngular5 {

    @Input("options")
    options: any;
    currentOptions: any;
    constructor() {
        this.currentOptions = $.extend({}, {
            "totalFrames	": 180,
            "currentFrame	": 1,
            "endFrame	": 180,
            "framerate	": 60,
            "filePrefix	": "",
            "ext	": "png",
            "height	": 300,
            "width	": 300,
            "style	": {},
            "navigation	": true,
            "autoplayDirection	": 1,
            "drag	": true,
            "disableSpin	": false,
            "zeroPadding	": false,
            "responsive	": false,
            "playSpeed	": 100,
            "zeroBased	": false
        }, this.options);



    }

}
