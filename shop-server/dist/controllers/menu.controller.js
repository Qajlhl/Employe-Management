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
exports.MenuController = void 0;
const common_1 = require("@nestjs/common");
const menu_service_1 = require("../services/menu.service");
const ResultData_1 = require("../utils/ResultData");
const passport_1 = require("@nestjs/passport");
const menu_role_entity_1 = require("../entity/menu-role.entity");
const menu_top_entity_1 = require("../entity/menu-top.entity");
const swagger_1 = require("@nestjs/swagger");
let MenuController = class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    findAllByRoleId(roleId) {
        return this.menuService.findAllByRoleId(roleId);
    }
    findAllMenu() {
        return this.menuService.findAll('menu');
    }
    insertRoleMenu(menuRole) {
        console.log(menuRole);
        return this.menuService.insertMenuRole(menuRole);
    }
    insert(menuTop) {
        menuTop.id = new Date().getTime();
        return this.menuService.insertTopMenu(menuTop);
    }
    insertChild(menuTop, pid) {
        menuTop.id = new Date().getTime();
        return this.menuService.insertChildMenu(menuTop, pid);
    }
    update(menuTop) {
        return this.menuService.updateTopMenu(menuTop);
    }
    updateChild(menuTop) {
        return this.menuService.updateChildMenu(menuTop);
    }
    findById(id) {
        return this.menuService.findById(id);
    }
    deleteById(id) {
        return this.menuService.deleteOneById(id);
    }
};
__decorate([
    common_1.Post('/list/all/role/:roleId'),
    swagger_1.ApiOperation({ summary: '根据用户的角色id获取菜单列表' }),
    swagger_1.ApiParam({
        name: 'roleId',
        description: '用户的角色id',
        example: '1'
    }),
    __param(0, common_1.Param("roleId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], MenuController.prototype, "findAllByRoleId", null);
__decorate([
    common_1.Get('/list/all'),
    swagger_1.ApiOperation({ summary: '获取所有菜单' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ResultData_1.ResultData)
], MenuController.prototype, "findAllMenu", null);
__decorate([
    common_1.Post('/insert/menu-role'),
    swagger_1.ApiOperation({ summary: '增加角色菜单的依赖关系' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_role_entity_1.MenuRole]),
    __metadata("design:returntype", ResultData_1.ResultData)
], MenuController.prototype, "insertRoleMenu", null);
__decorate([
    common_1.Put('/insert'),
    swagger_1.ApiOperation({ summary: '增加主菜单' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_top_entity_1.MenuTop]),
    __metadata("design:returntype", ResultData_1.ResultData)
], MenuController.prototype, "insert", null);
__decorate([
    common_1.Put('/insert/pid/:pid'),
    swagger_1.ApiOperation({ summary: '增加子菜单主菜单' }),
    swagger_1.ApiParam({
        name: 'pid',
        description: '当前新增菜单的父级菜单id'
    }),
    __param(0, common_1.Body()), __param(1, common_1.Param('pid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_top_entity_1.MenuTop, String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], MenuController.prototype, "insertChild", null);
__decorate([
    common_1.Put('/update'),
    swagger_1.ApiOperation({ summary: '修改主菜单' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_top_entity_1.MenuTop]),
    __metadata("design:returntype", ResultData_1.ResultData)
], MenuController.prototype, "update", null);
__decorate([
    common_1.Put('/update/child'),
    swagger_1.ApiOperation({ summary: '修改子菜单' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_top_entity_1.MenuTop]),
    __metadata("design:returntype", ResultData_1.ResultData)
], MenuController.prototype, "updateChild", null);
__decorate([
    common_1.Get('/find/id/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], MenuController.prototype, "findById", null);
__decorate([
    common_1.Delete('/delete/id/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], MenuController.prototype, "deleteById", null);
MenuController = __decorate([
    swagger_1.ApiTags("菜单接口"),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Controller("/menu"),
    __metadata("design:paramtypes", [menu_service_1.MenuService])
], MenuController);
exports.MenuController = MenuController;
//# sourceMappingURL=menu.controller.js.map