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
exports.User = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class User {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        description: '用户的id(在新增模块不需要传id)',
        example: '1',
    }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        description: '用户名',
        example: 'admin',
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        description: '密码',
        example: '123456',
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        description: '部门id',
        example: '001（新增修改不需要传）',
    }),
    __metadata("design:type", String)
], User.prototype, "deptId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        description: '角色id',
        example: '1',
        default: '1'
    }),
    __metadata("design:type", String)
], User.prototype, "roleId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '用户昵称',
        example: '管理员',
        default: '管理员'
    }),
    __metadata("design:type", String)
], User.prototype, "nickname", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '用户头像地址',
        example: '/face/face.png',
        default: '/face/face.png'
    }),
    __metadata("design:type", String)
], User.prototype, "face", void 0);
exports.User = User;
//# sourceMappingURL=user.entity.js.map