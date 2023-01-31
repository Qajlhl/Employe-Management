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
exports.MenuTop = void 0;
const swagger_1 = require("@nestjs/swagger");
class MenuTop {
}
__decorate([
    swagger_1.ApiProperty({
        description: '菜单id(只有修改操作需要传)',
        example: '1',
        required: false
    }),
    __metadata("design:type", Number)
], MenuTop.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '菜单名称',
        example: '系统设置',
    }),
    __metadata("design:type", String)
], MenuTop.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '菜单图标',
        example: 'el-icon-user',
    }),
    __metadata("design:type", String)
], MenuTop.prototype, "icon", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '菜单路由（增加子菜单时传，增加主菜单不需要传）',
        example: '/amdin',
        required: false
    }),
    __metadata("design:type", String)
], MenuTop.prototype, "url", void 0);
exports.MenuTop = MenuTop;
//# sourceMappingURL=menu-top.entity.js.map