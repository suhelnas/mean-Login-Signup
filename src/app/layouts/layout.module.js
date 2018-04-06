"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var after_login_layout_1 = require("./after.login.layout");
var before_login_layout_1 = require("./before.login.layout");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var footer_layout_1 = require("./footer.layout");
var navigation_bar_layout_1 = require("./navigation.bar.layout");
var sidebar_navigation_layout_1 = require("./sidebar.navigation.layout");
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            declarations: [after_login_layout_1.AfterLoginLayout, before_login_layout_1.BeforeLoginLayout, footer_layout_1.FooterLayout, navigation_bar_layout_1.NavigationBarLayout, sidebar_navigation_layout_1.SidebarNavigationLayout],
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule,
                forms_1.FormsModule],
            exports: [after_login_layout_1.AfterLoginLayout, before_login_layout_1.BeforeLoginLayout, footer_layout_1.FooterLayout, navigation_bar_layout_1.NavigationBarLayout, sidebar_navigation_layout_1.SidebarNavigationLayout]
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map