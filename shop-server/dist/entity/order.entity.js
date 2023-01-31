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
exports.Order = void 0;
const swagger_1 = require("@nestjs/swagger");
class Order {
}
__decorate([
    swagger_1.ApiProperty({
        description: 'id',
        example: '001（新增不需要传）',
    }),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '用户id',
        example: '（新增和修改不需要传）',
    }),
    __metadata("design:type", String)
], Order.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '手机号',
        example: '（新增和修改不需要传）',
    }),
    __metadata("design:type", String)
], Order.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '购买人昵称',
        example: '（新增和修改不需要传）',
    }),
    __metadata("design:type", String)
], Order.prototype, "nickname", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '密码',
        example: '',
    }),
    __metadata("design:type", String)
], Order.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品id',
        example: '',
    }),
    __metadata("design:type", String)
], Order.prototype, "goodsId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品名',
        example: '',
    }),
    __metadata("design:type", String)
], Order.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '购买数量',
        example: '',
    }),
    __metadata("design:type", Number)
], Order.prototype, "num", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品单价',
        example: '',
    }),
    __metadata("design:type", Number)
], Order.prototype, "singlePrice", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品原单价',
        example: '',
    }),
    __metadata("design:type", Number)
], Order.prototype, "singlePriceOld", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品折扣',
        example: '',
    }),
    __metadata("design:type", Number)
], Order.prototype, "zheKou", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '商品总价',
        example: '',
    }),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '订单状态',
        example: '1:已支付，2:已发货，3:确认收货',
    }),
    __metadata("design:type", Number)
], Order.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '详细地址',
        example: 'xxxx街道xxx小区',
    }),
    __metadata("design:type", String)
], Order.prototype, "address", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '物流单号（增加修改都不需要传）',
        example: 'xxxx街道xxx小区',
    }),
    __metadata("design:type", String)
], Order.prototype, "postCode", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '订单时间（时间戳格式不需要传）',
        example: '',
    }),
    __metadata("design:type", Number)
], Order.prototype, "insertTime", void 0);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map