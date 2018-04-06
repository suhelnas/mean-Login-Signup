"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var auth_module_1 = require("./authentication/auth.module");
var app_routes_1 = require("./app.routes");
var auth_service_1 = require("./authentication/services/auth.service");
var http_1 = require("@angular/common/http");
var product_module_1 = require("./product/product.module");
var user_module_1 = require("./user/user.module");
var layout_module_1 = require("./layouts/layout.module");
var add_product_module_modal_1 = require("./product/add.product.module.modal");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var client_module_1 = require("./client/client.module");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, router_1.RouterModule, ngx_bootstrap_1.ModalModule.forRoot(), auth_module_1.AuthModule, product_module_1.ProductModule, user_module_1.UserModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES), client_module_1.ClientModule,
                http_1.HttpClientModule, layout_module_1.LayoutModule, dashboard_module_1.DashboardModule
            ],
            providers: [auth_service_1.AuthService],
            entryComponents: [
                add_product_module_modal_1.AddProductModuleModal
            ],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map