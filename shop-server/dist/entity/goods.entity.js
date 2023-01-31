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
exports.Goods = void 0;
const swagger_1 = require("@nestjs/swagger");
class Goods {
}
__decorate([
    swagger_1.ApiProperty({
        description: '商品id（增加时不需要传）',
        example: '1',
    }),
    __metadata("design:type", Number)
], Goods.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品名称',
        example: '大米',
    }),
    __metadata("design:type", String)
], Goods.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品价格',
        example: '100',
    }),
    __metadata("design:type", Number)
], Goods.prototype, "price", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品折扣（只能在1-10之间，10为不打折）',
        example: '10',
    }),
    __metadata("design:type", Number)
], Goods.prototype, "zheKou", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品类型id',
        example: '1',
    }),
    __metadata("design:type", Number)
], Goods.prototype, "goodsTypeId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品库存，列表页面展示',
        example: '100',
    }),
    __metadata("design:type", Number)
], Goods.prototype, "count", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '是否上架，（1为上架，0为下架），新增和修改不需要传，查询列表中使用',
        example: '1',
    }),
    __metadata("design:type", Number)
], Goods.prototype, "isOnSale", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品的logo图片',
        example: '/public/shop/logo.png',
    }),
    __metadata("design:type", String)
], Goods.prototype, "logo", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品的详情图片，最多传3张，列表页面不需要展示',
        example: `['/public/shop/logo.png','/public/shop/logo1.png']`,
    }),
    __metadata("design:type", Array)
], Goods.prototype, "pics", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品的详细描述',
        example: '五常大米是东北最好吃的大米',
    }),
    __metadata("design:type", String)
], Goods.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品备注',
        example: '备注',
    }),
    __metadata("design:type", String)
], Goods.prototype, "remark", void 0);
exports.Goods = Goods;
//# sourceMappingURL=goods.entity.js.map