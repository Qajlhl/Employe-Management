"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponTypeModule = void 0;
const common_1 = require("@nestjs/common");
const coupon_type_controller_1 = require("../controllers/coupon-type.controller");
const coupon_type_service_1 = require("../services/coupon-type.service");
let CouponTypeModule = class CouponTypeModule {
};
CouponTypeModule = __decorate([
    common_1.Module({
        controllers: [coupon_type_controller_1.CouponTypeController],
        providers: [coupon_type_service_1.CouponTypeService],
    })
], CouponTypeModule);
exports.CouponTypeModule = CouponTypeModule;
//# sourceMappingURL=coupon-type.module.js.map