/***
 * file name : Responsive/index.js
 * description : responsive class
 * create date : 2019-01-10
 * creator : saltgamer
 ***/
import {$CurrentMode} from '../Globals';

export default class Responsive {
    constructor(target) {
        this.currentZoomRate = 0;
        this.target = target;
        this.baseContainer = {
            width: target.contentWindow.document.body.scrollWidth,
            height: target.contentWindow.document.body.scrollHeight
        };
        this.scaledSize = null;

        /* this.target.style.position = 'absolute';
         this.target.style.padding = '0';
         this.target.style.margin = '0';*/

        this.update();
        this.setScaleElement();

        // console.log('~> target: ', target);
        console.log('~> baseContainer: ', this.baseContainer);


    }

    update() {
        this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    setScaleElement() {
        console.log('~~> setScaleElement... ');

        const displayValue = $CurrentMode === 'single' ? 1 : 2;

        const zoomVertical = this.screenHeight / this.baseContainer.height,
            zoomHorizontal = this.screenWidth / (this.baseContainer.width * displayValue);

        if ((this.baseContainer.width * zoomVertical) * displayValue > this.screenWidth) {
            this.setTransformCSS(zoomHorizontal);
        } else {
            this.setTransformCSS(zoomVertical);
        }

    }

    setTransformCSS(zoomRate) {
        this.currentZoomRate = zoomRate;

        const target = this.target.contentWindow.document.body;

        target.style.msTransform = 'scale(' + zoomRate + ', ' + zoomRate + ')';
        target.style.webkitTransform = 'scale(' + zoomRate + ', ' + zoomRate + ')';
        target.style.transform = 'scale(' + zoomRate + ', ' + zoomRate + ')';

        target.style.transformOrigin = '0% 0%';
        target.style.msTransformOrigin = '0% 0%';
        target.style.webkitTransformOrigin = '0% 0%';

        target.style.position = 'absolute';
        target.style.padding = '0';
        target.style.margin = '0';

        this.target.style.width = (this.baseContainer.width * zoomRate) + 'px';
        this.target.style.height = (this.baseContainer.height * zoomRate) + 'px';

        this.target.parentNode.style.width = (this.baseContainer.width * zoomRate) + 'px';
        this.target.parentNode.style.height = (this.baseContainer.height * zoomRate) + 'px';

        // console.log('~~> target: ', this.target.style.width);

        if (this.baseContainer.width > 0) {
            this.scaledSize = {
                width: (this.baseContainer.width * zoomRate),
                height: (this.baseContainer.height * zoomRate)

            };
        }
    }

    resize(target) {
        this.target = target;
        this.update();
        this.setScaleElement();
    }

}