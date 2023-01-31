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
exports.CouponMultiple = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CouponMultiple {
}
__decorate([
    swagger_1.ApiProperty({
        description: '优惠券id（增加时不需要传）',
        example: '1',
    }),
    __metadata("design:type", Number)
], CouponMultiple.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '优惠券名称',
        example: '',
    }),
    __metadata("design:type", String)
], CouponMultiple.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '创建优惠券的张数',
        example: '',
    }),
    __metadata("design:type", Number)
], CouponMultiple.prototype, "count", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '优惠券类型id',
        example: '',
    }),
    __metadata("design:type", String)
], CouponMultiple.prototype, "couponTypeId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '优惠券价值，如当为现金券时为该券的价格，当为满减券时为券的减免金额',
        example: '',
    }),
    __metadata("design:type", Number)
], CouponMultiple.prototype, "price", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '优惠券价值，如当为现金券时为该券的实际价值比如88元抵100，这个字段为100，当为满减券时为券的门槛价',
        example: '',
    }),
    __metadata("design:type", Number)
], CouponMultiple.prototype, "totalPrice", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '优惠券的截止日期，超过截止日期优惠券会被作废',
        example: '',
    }),
    __metadata("design:type", String)
], CouponMultiple.prototype, "targetTime", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '优惠券的状态，0是未分配，1为已领取 创建修改不需要传',
        example: '',
    }),
    __metadata("design:type", Number)
], CouponMultiple.prototype, "status", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        description: '优惠券备注',
        example: '',
    }),
    __metadata("design:type", String)
], CouponMultiple.prototype, "remark", void 0);
exports.CouponMultiple = CouponMultiple;
//# sourceMappingURL=coupon-multiple.entity.js.map