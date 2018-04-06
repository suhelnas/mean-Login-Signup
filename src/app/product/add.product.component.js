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
var add_product_module_modal_1 = require("./add.product.module.modal");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(modalService) {
        this.modalService = modalService;
        this.Product = {
            productName: null,
            hostedOn: null,
            productUrl: null,
            serverIp: null,
            servercredentials: null,
            ProductModule: [{
                    moduleName: null,
                    teamWorked: null,
                    teamWorking: null,
                    lastUpdated: null,
                }]
        };
    }
    AddProductComponent.prototype.openModalWithComponent = function () {
        var initialState = {
            list: [
                'Open a modal with component',
                'Pass your data',
                'Do something else',
                '...'
            ],
            title: 'Modal with component'
        };
        this.bsModalRef = this.modalService.show(add_product_module_modal_1.AddProductModuleModal, { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    AddProductComponent = __decorate([
        core_1.Component({
            selector: 'add-product',
            templateUrl: './add.product.component.html',
            styleUrls: ['./add.product.component.css']
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_1.BsModalService])
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
//# sourceMappingURL=add.product.component.js.map