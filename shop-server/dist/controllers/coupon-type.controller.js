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
exports.CouponTypeController = void 0;
const common_1 = require("@nestjs/common");
const coupon_type_service_1 = require("../services/coupon-type.service");
const ResultData_1 = require("../utils/ResultData");
const passport_1 = require("@nestjs/passport");
const coupon_type_entity_1 = require("../entity/coupon-type.entity");
const swagger_1 = require("@nestjs/swagger");
let CouponTypeController = class CouponTypeController {
    constructor(couponTypeService) {
        this.couponTypeService = couponTypeService;
    }
    findAll() {
        return this.couponTypeService.findAll('coupon-type');
    }
    findForPage(pno = 1, psize = 10, name, remark) {
        return this.couponTypeService.findForPageByExample(pno, psize, name, remark, 'coupon-type');
    }
    deleteById(id) {
        return this.couponTypeService.deleteById(id, 'coupon-type');
    }
    insert(couponType) {
        couponType.insertTime = new Date().getTime();
        return this.couponTypeService.insertOne(couponType, 'coupon-type');
    }
    update(couponType) {
        return this.couponTypeService.updateOne(couponType, 'coupon-type');
    }
    findById(id) {
        return this.couponTypeService.findById(id, 'coupon-type');
    }
};
__decorate([
    common_1.Get('/list/all'),
    swagger_1.ApiOperation({ summary: '获取所有的优惠券类型' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ResultData_1.ResultData)
], CouponTypeController.prototype, "findAll", null);
__decorate([
    common_1.Get('/list/page'),
    swagger_1.ApiOperation({ summary: '分页获取所有的优惠券类型' }),
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
        description: '类型名称（模糊查询）',
        example: '数码',
        required: false
    }),
    swagger_1.ApiQuery({
        name: 'remark',
        description: '备注（模糊查询）',
        example: '备注',
        required: false
    }),
    __param(0, common_1.Query('pno')),
    __param(1, common_1.Query('psize')),
    __param(2, common_1.Query('name')),
    __param(3, common_1.Query('remark')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CouponTypeController.prototype, "findForPage", null);
__decorate([
    common_1.Delete('/delete/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id删除优惠券类型' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CouponTypeController.prototype, "deleteById", null);
__decorate([
    common_1.Put('/insert'),
    swagger_1.ApiOperation({ summary: '新增优惠券类型' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coupon_type_entity_1.CouponType]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CouponTypeController.prototype, "insert", null);
__decorate([
    common_1.Put('/update'),
    swagger_1.ApiOperation({ summary: '修改优惠券类型' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coupon_type_entity_1.CouponType]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CouponTypeController.prototype, "update", null);
__decorate([
    common_1.Get('/find/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id查询优惠券类型' }),
    swagger_1.ApiParam({
        name: 'id',
        description: '类型的id'
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CouponTypeController.prototype, "findById", null);
CouponTypeController = __decorate([
    swagger_1.ApiTags("优惠券类型接口"),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Controller("/coupon-type"),
    __metadata("design:paramtypes", [coupon_type_service_1.CouponTypeService])
], CouponTypeController);
exports.CouponTypeController = CouponTypeController;
//# sourceMappingURL=coupon-type.controller.js.map