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
exports.Card = void 0;
const swagger_1 = require("@nestjs/swagger");
class Card {
}
__decorate([
    swagger_1.ApiProperty({
        description: '卡id（增加时不需要传）',
        example: '1',
    }),
    __metadata("design:type", Number)
], Card.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '卡名称',
        example: '大米',
    }),
    __metadata("design:type", String)
], Card.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '卡类型id',
        example: '100',
    }),
    __metadata("design:type", Number)
], Card.prototype, "cardTypeId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '卡编号(编号是自动生成的不需要传)',
        example: 'HY-BM-00000001',
    }),
    __metadata("design:type", String)
], Card.prototype, "num", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '卡的logo图片',
        example: '/public/shop/logo.png',
    }),
    __metadata("design:type", String)
], Card.prototype, "logo", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '卡备注',
        example: '备注',
    }),
    __metadata("design:type", String)
], Card.prototype, "remark", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '卡状态（0，未使用，1，已发卡）增加和修改不需要传',
        example: '0',
    }),
    __metadata("design:type", Number)
], Card.prototype, "status", void 0);
exports.Card = Card;
//# sourceMappingURL=card.entity.js.map