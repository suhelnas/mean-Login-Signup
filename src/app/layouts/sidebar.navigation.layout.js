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
var SidebarNavigationLayout = /** @class */ (function () {
    function SidebarNavigationLayout() {
        this.openSideNav = new core_1.EventEmitter();
    }
    SidebarNavigationLayout.prototype.closeNav = function () {
        this.openSideNav.emit(false);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SidebarNavigationLayout.prototype, "openSideNav", void 0);
    SidebarNavigationLayout = __decorate([
        core_1.Component({
            selector: 'sidebar-navigation',
            templateUrl: './sidebar.navigation.layout.html',
            styleUrls: ['./sidebar.navigation.layout.css']
        }),
        __metadata("design:paramtypes", [])
    ], SidebarNavigationLayout);
    return SidebarNavigationLayout;
}());
exports.SidebarNavigationLayout = SidebarNavigationLayout;
//# sourceMappingURL=sidebar.navigation.layout.js.map