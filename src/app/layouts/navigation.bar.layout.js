"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavigationBarLayout = /** @class */ (function () {
    function NavigationBarLayout(eRef) {
        this.eRef = eRef;
        this.openSideNav = new core_1.EventEmitter();
    }
    NavigationBarLayout.prototype.openSideBar = function () {
        this.openSideNav.emit(true);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NavigationBarLayout.prototype, "openSideNav", void 0);
    NavigationBarLayout = __decorate([
        core_1.Component({
            selector: 'navigation-bar',
            templateUrl: './navigation.bar.layout.html'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], NavigationBarLayout);
    return NavigationBarLayout;
}());
exports.NavigationBarLayout = NavigationBarLayout;
//# sourceMappingURL=navigation.bar.layout.js.map