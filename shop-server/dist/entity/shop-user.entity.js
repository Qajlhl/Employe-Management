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
exports.ShopUser = void 0;
const swagger_1 = require("@nestjs/swagger");
class ShopUser {
}
__decorate([
    swagger_1.ApiProperty({
        description: '会员id（增加时不需要传）',
        example: '1',
    }),
    __metadata("design:type", Number)
], ShopUser.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '会员账号',
        example: 'test',
    }),
    __metadata("design:type", String)
], ShopUser.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '会员密码',
        example: '123456',
    }),
    __metadata("design:type", String)
], ShopUser.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '会员昵称',
        example: '小明',
    }),
    __metadata("design:type", String)
], ShopUser.prototype, "nickname", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '会员类型id',
        example: '1',
    }),
    __metadata("design:type", Number)
], ShopUser.prototype, "userTypeId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '会员生日格式要求为yyyy-MM-dd',
        example: '2020-02-02',
    }),
    __metadata("design:type", String)
], ShopUser.prototype, "birthday", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '性别，1为男，0为女',
        example: '1',
    }),
    __metadata("design:type", Number)
], ShopUser.prototype, "sex", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '手机号码',
        example: '18945051918',
    }),
    __metadata("design:type", String)
], ShopUser.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '会员卡号（增加修改模块不需要使用）',
        example: 1601881834420,
    }),
    __metadata("design:type", String)
], ShopUser.prototype, "cardNumber", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '头像',
        example: '/public/user/face.png',
    }),
    __metadata("design:type", String)
], ShopUser.prototype, "face", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '用户状态，是否冻结？1冻结，0正常（新增和修改不需要传）',
        example: 0,
    }),
    __metadata("design:type", Number)
], ShopUser.prototype, "freeze", void 0);
exports.ShopUser = ShopUser;
//# sourceMappingURL=shop-user.entity.js.map