"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Knight on 2017/1/23.
 */
var core_1 = require("@angular/core");
var AboutMeComponent = (function () {
    function AboutMeComponent() {
    }
    return AboutMeComponent;
}());
AboutMeComponent = __decorate([
    core_1.Component({
        selector: 'about-me',
        template: "\n        <img src=\"./app/images/step1.jpg\">\n    ",
        styles: [
            'img{width: 100%;height: 100%;}'
        ]
    })
], AboutMeComponent);
exports.AboutMeComponent = AboutMeComponent;
//# sourceMappingURL=aboutMe.component.js.map