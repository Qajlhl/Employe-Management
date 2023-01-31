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
exports.Address = void 0;
const swagger_1 = require("@nestjs/swagger");
class Address {
}
__decorate([
    swagger_1.ApiProperty({
        description: 'id',
        example: '001（新增不需要传）',
    }),
    __metadata("design:type", String)
], Address.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '用户id',
        example: '（新增和修改不需要传）',
    }),
    __metadata("design:type", String)
], Address.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '省编码',
        example: '230001',
    }),
    __metadata("design:type", String)
], Address.prototype, "provinceId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '省名称',
        example: '黑龙江（新增和修改不需要传）',
    }),
    __metadata("design:type", String)
], Address.prototype, "province", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '市编码',
        example: '230002',
    }),
    __metadata("design:type", Number)
], Address.prototype, "cityId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '市名称',
        example: '哈尔滨（新增和修改不需要传）',
    }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '区编码',
        example: '230003',
    }),
    __metadata("design:type", Number)
], Address.prototype, "areaId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '区名称',
        example: '南岗区（新增和修改不需要传）',
    }),
    __metadata("design:type", String)
], Address.prototype, "area", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '详细地址',
        example: 'xxxx街道xxx小区',
    }),
    __metadata("design:type", String)
], Address.prototype, "address", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '是否是默认地址',
        example: '1/0 1为默认地址 0为其他地址',
    }),
    __metadata("design:type", Number)
], Address.prototype, "default", void 0);
exports.Address = Address;
//# sourceMappingURL=address.entity.js.map