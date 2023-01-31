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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../services/user.service");
const ResultData_1 = require("../utils/ResultData");
const passport_1 = require("@nestjs/passport");
const user_entity_1 = require("../entity/user.entity");
const user_param_entity_1 = require("../entity/user-param.entity");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    login(user) {
        return this.userService.login(user.username, user.password);
    }
    loginShop(user) {
        return this.userService.loginShop(user.username, user.password);
    }
    code(req) {
        let random = Math.floor((Math.random() * 10000) + 10000);
        req.session.code = (random + "").substring(1);
        return ResultData_1.ResultData.end(200, { code: req.session.code }, '获取成功');
    }
    changePassword(req, phone, code, password) {
        if (code == req.session.code) {
            return this.userService.changePassword(phone, password);
        }
        else {
            return ResultData_1.ResultData.end(500, {}, '验证码不正确');
        }
    }
    register(req, phone, code, password) {
        if (req.session.code != code) {
            return ResultData_1.ResultData.end(500, {}, '验证码错误');
        }
        return this.userService.register(phone, password);
    }
    getMenuList() {
        return this.userService.findAll('menu-test');
    }
    getUser(id) {
        return this.userService.findById(id, 'user');
    }
    insert(user) {
        user.insertTime = new Date().getTime();
        return this.userService.insertOne(user, 'user');
    }
    update(user) {
        return this.userService.updateOne(user, 'user');
    }
    getUserListAll() {
        return this.userService.findListAll('user');
    }
    getUserListForPageByUserName(pno, psize, username) {
        return this.userService.findForPageByUserName(pno, psize, username);
    }
    deleteById(id) {
        return this.userService.deleteById(id, 'user');
    }
    getVCode() {
        return this.userService.getVCode();
    }
};
__decorate([
    common_1.Post('/login'),
    swagger_1.ApiOperation({ summary: '用户登录' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_param_entity_1.UserParam]),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserController.prototype, "login", null);
__decorate([
    common_1.Post('/login/shop'),
    swagger_1.ApiOperation({ summary: '商城端用户登录' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_param_entity_1.UserParam]),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserController.prototype, "loginShop", null);
__decorate([
    common_1.Get('/code'),
    swagger_1.ApiOperation({ summary: '获取验证码' }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserController.prototype, "code", null);
__decorate([
    common_1.Get('/change/pass'),
    swagger_1.ApiOperation({ summary: '商城会员修改密码' }),
    swagger_1.ApiQuery({
        name: 'phone',
        description: '手机号码',
        example: '18945051918',
    }),
    swagger_1.ApiQuery({
        name: 'code',
        description: '验证码',
        example: '0989',
    }),
    swagger_1.ApiQuery({
        name: 'password',
        description: '密码',
        example: '123456',
    }),
    __param(0, common_1.Req()),
    __param(1, common_1.Query('phone')),
    __param(2, common_1.Query('code')),
    __param(3, common_1.Query('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserController.prototype, "changePassword", null);
__decorate([
    common_1.Get('/register'),
    swagger_1.ApiOperation({ summary: '商城会员注册' }),
    swagger_1.ApiQuery({
        name: 'phone',
        description: '手机号码',
        example: '18945051918',
    }),
    swagger_1.ApiQuery({
        name: 'code',
        description: '验证码',
        example: '0989',
    }),
    swagger_1.ApiQuery({
        name: 'password',
        description: '密码',
        example: '123456',
    }),
    __param(0, common_1.Req()),
    __param(1, common_1.Query('phone')),
    __param(2, common_1.Query('code')),
    __param(3, common_1.Query('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserController.prototype, "register", null);
__decorate([
    common_1.Get("/menu/list"),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiOperation({ summary: '获取用户菜单的练习接口' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserController.prototype, "getMenuList", null);
__decorate([
    common_1.Get("/find/id/:id"),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiOperation({ summary: '根据用户id获取用户' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserController.prototype, "getUser", null);
__decorate([
    common_1.Put("/insert"),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiOperation({ summary: '增加用户' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "insert", null);
__decorate([
    common_1.Put("/update"),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiOperation({ summary: '编辑用户' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    common_1.Get("/list/all"),
    swagger_1.ApiOperation({ summary: '查询所有用户' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserController.prototype, "getUserListAll", null);
__decorate([
    common_1.Get("/list/page"),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiOperation({ summary: '分页查询用户列表' }),
    swagger_1.ApiQuery({
        name: 'pno',
        description: '页号',
        example: 1,
    }),
    swagger_1.ApiQuery({
        name: 'psize',
        description: '每页多少条',
        example: 10
    }),
    swagger_1.ApiQuery({
        name: 'username',
        description: '用户账号',
        example: 'admin',
        required: false
    }),
    __param(0, common_1.Query('pno')), __param(1, common_1.Query('psize')),
    __param(2, common_1.Query('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserController.prototype, "getUserListForPageByUserName", null);
__decorate([
    common_1.Delete('/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id删除用户' }),
    swagger_1.ApiParam({
        name: 'id',
        description: '用户的id'
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserController.prototype, "deleteById", null);
__decorate([
    common_1.Get('/vcode'),
    swagger_1.ApiOperation({ summary: '获取验证码' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserController.prototype, "getVCode", null);
UserController = __decorate([
    swagger_1.ApiTags("用户接口"),
    swagger_1.ApiBearerAuth(),
    common_1.Controller("/user"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map