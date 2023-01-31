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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponController = void 0;
const common_1 = require("@nestjs/common");
const coupon_service_1 = require("../services/coupon.service");
const ResultData_1 = require("../utils/ResultData");
const coupon_multiple_entity_1 = require("../entity/coupon-multiple.entity");
const coupon_entity_1 = require("../entity/coupon.entity");
const swagger_1 = require("@nestjs/swagger");
let CouponController = class CouponController {
    constructor(couponService) {
        this.couponService = couponService;
    }
    findForPage(pno = 1, psize = 10, name, couponTypeId) {
        return this.couponService.
            findForPageByExample(pno, psize, name, couponTypeId, 'coupon');
    }
    deleteById(id) {
        return this.couponService.deleteById(id, 'coupon');
    }
    insert(coupon) {
        coupon.insertTime = new Date().getTime();
        coupon.status = 0;
        coupon.targetTime = new Date(coupon.targetTime).getTime() + '';
        return this.couponService.insertOne(coupon, 'coupon');
    }
    update(coupon) {
        coupon.targetTime = new Date(coupon.targetTime).getTime() + '';
        return this.couponService.updateOne(coupon, 'coupon');
    }
    findById(id) {
        return this.couponService.findById(id, 'coupon');
    }
    insertMultiple(couponMultiple) {
        couponMultiple.targetTime = new Date(couponMultiple.targetTime).getTime() + '';
        return this.couponService.insertMultiple(couponMultiple);
    }
};
__decorate([
    common_1.Get('/list/page'),
    swagger_1.ApiOperation({ summary: '分页获取所有的优惠券' }),
    swagger_1.ApiQuery({
        name: 'pno',
        description: '页号',
        example: 1
    }),
    swagger_1.ApiQuery({
        name: 'psize',
        description: '每页多少条',
        example: 10
    }),
    swagger_1.ApiQuery({
        name: 'name',
        description: '优惠券名称（模糊查询）',
        example: '大米',
        required: false
    }),
    swagger_1.ApiQuery({
        name: 'couponTypeId',
        description: '优惠券类型id',
        example: '1',
        required: false
    }),
    __param(0, common_1.Query('pno')),
    __param(1, common_1.Query('psize')),
    __param(2, common_1.Query('name')),
    __param(3, common_1.Query('couponTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Number]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CouponController.prototype, "findForPage", null);
__decorate([
    common_1.Delete('/delete/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id删除优惠券' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CouponController.prototype, "deleteById", null);
__decorate([
    common_1.Put('/insert'),
    swagger_1.ApiOperation({ summary: '新增优惠券' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coupon_entity_1.Coupon]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CouponController.prototype, "insert", null);
__decorate([
    common_1.Put('/update'),
    swagger_1.ApiOperation({ summary: '修改优惠券' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coupon_entity_1.Coupon]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CouponController.prototype, "update", null);
__decorate([
    common_1.Get('/find/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id查询优惠券' }),
    swagger_1.ApiParam({
        name: 'id',
        description: '的id'
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CouponController.prototype, "findById", null);
__decorate([
    common_1.Put("/insert/multiple"),
    swagger_1.ApiOperation({ summary: '批量创建优惠券接口' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coupon_multiple_entity_1.CouponMultiple]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CouponController.prototype, "insertMultiple", null);
CouponController = __decorate([
    swagger_1.ApiTags("优惠券接口"),
    swagger_1.ApiBearerAuth(),
    common_1.Controller("/coupon"),
    __metadata("design:paramtypes", [coupon_service_1.CouponService])
], CouponController);
exports.CouponController = CouponController;
//# sourceMappingURL=coupon.controller.js.map