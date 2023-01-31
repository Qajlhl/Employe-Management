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
exports.CheckOutPosition = void 0;
const swagger_1 = require("@nestjs/swagger");
class CheckOutPosition {
}
__decorate([
    swagger_1.ApiProperty({
        description: 'id',
        example: '001（新增不需要传）',
    }),
    __metadata("design:type", String)
], CheckOutPosition.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '国家',
        example: '中国',
    }),
    __metadata("design:type", String)
], CheckOutPosition.prototype, "nation", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '上班时间（时间戳）',
        example: '',
    }),
    __metadata("design:type", String)
], CheckOutPosition.prototype, "beginTime", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '下班时间（时间戳）',
        example: '',
    }),
    __metadata("design:type", String)
], CheckOutPosition.prototype, "endTime", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '省名称',
        example: '黑龙江（新增和修改不需要传）',
    }),
    __metadata("design:type", String)
], CheckOutPosition.prototype, "province", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '市名称',
        example: '哈尔滨（新增和修改不需要传）',
    }),
    __metadata("design:type", String)
], CheckOutPosition.prototype, "city", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '区名称',
        example: '南岗区（新增和修改不需要传）',
    }),
    __metadata("design:type", String)
], CheckOutPosition.prototype, "district", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '纬度',
        example: '40.3232',
    }),
    __metadata("design:type", Number)
], CheckOutPosition.prototype, "lat", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '经度',
        example: '126.3232',
    }),
    __metadata("design:type", Number)
], CheckOutPosition.prototype, "lng", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '半径（公里）',
        example: '1.5',
    }),
    __metadata("design:type", Number)
], CheckOutPosition.prototype, "r", void 0);
exports.CheckOutPosition = CheckOutPosition;
//# sourceMappingURL=check-out-position.entity.js.map