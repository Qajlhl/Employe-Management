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
exports.GoodsController = void 0;
const common_1 = require("@nestjs/common");
const goods_service_1 = require("../services/goods.service");
const ResultData_1 = require("../utils/ResultData");
const passport_1 = require("@nestjs/passport");
const goods_entity_1 = require("../entity/goods.entity");
const swagger_1 = require("@nestjs/swagger");
let GoodsController = class GoodsController {
    constructor(goodsService) {
        this.goodsService = goodsService;
    }
    findForPage(pno = 1, psize = 10, name, isOnSale, goodsTypeId) {
        return this.goodsService.
            findForPageByExample(pno, psize, name, isOnSale, goodsTypeId, 'goods');
    }
    deleteById(id) {
        return this.goodsService.deleteById(id, 'goods');
    }
    insert(goods) {
        goods.insertTime = new Date().getTime();
        goods.isOnSale = 0;
        return this.goodsService.insertOne(goods, 'goods');
    }
    update(goods) {
        return this.goodsService.updateOne(goods, 'goods');
    }
    findById(id) {
        return this.goodsService.findById(id, 'goods');
    }
    setOnSale(id, isOnSale) {
        return this.goodsService.setOnSale(id, isOnSale, 'goods');
    }
};
__decorate([
    common_1.Get('/list/page'),
    swagger_1.ApiOperation({ summary: '分页获取所有的商品' }),
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
        description: '商品名称（模糊查询）',
        example: '大米',
        required: false
    }),
    swagger_1.ApiQuery({
        name: 'isOnSale',
        description: '商品是否在架，1在架，0不在架',
        example: '1',
        required: false
    }),
    swagger_1.ApiQuery({
        name: 'goodsTypeId',
        description: '商品类型id',
        example: '1',
        required: false
    }),
    __param(0, common_1.Query('pno')),
    __param(1, common_1.Query('psize')),
    __param(2, common_1.Query('name')),
    __param(3, common_1.Query('isOnSale')),
    __param(4, common_1.Query('goodsTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Number, Number]),
    __metadata("design:returntype", ResultData_1.ResultData)
], GoodsController.prototype, "findForPage", null);
__decorate([
    common_1.Delete('/delete/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id删除商品' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], GoodsController.prototype, "deleteById", null);
__decorate([
    common_1.Put('/insert'),
    swagger_1.ApiOperation({ summary: '新增商品' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [goods_entity_1.Goods]),
    __metadata("design:returntype", ResultData_1.ResultData)
], GoodsController.prototype, "insert", null);
__decorate([
    common_1.Put('/update'),
    swagger_1.ApiOperation({ summary: '修改商品' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [goods_entity_1.Goods]),
    __metadata("design:returntype", ResultData_1.ResultData)
], GoodsController.prototype, "update", null);
__decorate([
    common_1.Get('/find/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id查询商品' }),
    swagger_1.ApiParam({
        name: 'id',
        description: '的id'
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], GoodsController.prototype, "findById", null);
__decorate([
    common_1.Get('/set/onsale'),
    swagger_1.ApiOperation({ summary: '设置上下架' }),
    swagger_1.ApiQuery({
        name: 'id',
        description: '商品id'
    }),
    swagger_1.ApiQuery({
        name: 'isOnSale',
        description: '商品状态，0下架，1上架'
    }),
    __param(0, common_1.Query('id')), __param(1, common_1.Query('isOnSale')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", ResultData_1.ResultData)
], GoodsController.prototype, "setOnSale", null);
GoodsController = __decorate([
    swagger_1.ApiTags("商品接口"),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Controller("/goods"),
    __metadata("design:paramtypes", [goods_service_1.GoodsService])
], GoodsController);
exports.GoodsController = GoodsController;
//# sourceMappingURL=goods.controller.js.map