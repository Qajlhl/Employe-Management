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
exports.ApiTestController = void 0;
const common_1 = require("@nestjs/common");
const apitest_service_1 = require("../services/apitest.service");
const ResultData_1 = require("../utils/ResultData");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../entity/user.entity");
const user_param_entity_1 = require("../entity/user-param.entity");
const ids_entity_1 = require("../entity/ids.entity");
let ApiTestController = class ApiTestController {
    constructor(apiTestService) {
        this.apiTestService = apiTestService;
    }
    getDemo1() {
        return this.apiTestService.findAll('user');
    }
    getDemo2(username, password) {
        return this.apiTestService.findByUserNameAndPassWord(username, password, 'user');
    }
    postDemo1() {
        return this.apiTestService.findAll('user');
    }
    postDemo2(user) {
        return this.apiTestService.findByUserNameAndPassWord(user.username, user.password, 'user');
    }
    pathDemo1(username, password) {
        return ResultData_1.ResultData.end(200, { username, password }, "成功");
    }
    putDemo(user) {
        return this.apiTestService.insertOne(user, 'user');
    }
    deleteDemo1(id) {
        return this.apiTestService.deleteById(id, 'user');
    }
    deleteDemo2(id) {
        return this.apiTestService.deleteById(id, 'user');
    }
    deleteDemo3(ids) {
        return this.apiTestService.deleteByIds(ids, 'user');
    }
};
__decorate([
    common_1.Get("/get/demo1"),
    swagger_1.ApiOperation({
        summary: '无参数get接口调用练习，获取所有管理员数据'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ResultData_1.ResultData)
], ApiTestController.prototype, "getDemo1", null);
__decorate([
    common_1.Get("/get/demo2"),
    swagger_1.ApiOperation({
        summary: '有参数get接口调用练习，根据用户账号密码查询管理员用户信息'
    }),
    swagger_1.ApiQuery({
        name: 'username',
        description: '用户账号',
        example: 'admin'
    }),
    swagger_1.ApiQuery({
        name: 'password',
        description: '用户密码',
        example: '123456'
    }),
    __param(0, common_1.Query('username')),
    __param(1, common_1.Query('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], ApiTestController.prototype, "getDemo2", null);
__decorate([
    common_1.Post("/post/demo1"),
    swagger_1.ApiOperation({
        summary: '无参数post接口调用练习，同get方式的示例'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ResultData_1.ResultData)
], ApiTestController.prototype, "postDemo1", null);
__decorate([
    common_1.Post("/post/demo2"),
    swagger_1.ApiOperation({
        summary: '有参数post接口调用练习，根据用户账号密码查询用户信息，通过json和表单提交进行传参数，同get方式的示例'
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_param_entity_1.UserParam]),
    __metadata("design:returntype", ResultData_1.ResultData)
], ApiTestController.prototype, "postDemo2", null);
__decorate([
    common_1.Post("/path/demo1/username/:username/password/:password"),
    swagger_1.ApiOperation({
        summary: '有参数Post接口调用练习，通过url路径传参数，通过path传递参数来实现通过账号密码获取管理员用户数据'
    }),
    swagger_1.ApiParam({
        name: 'username',
        description: '用户账号',
        example: 'admin'
    }),
    swagger_1.ApiParam({
        name: 'password',
        description: '用户密码',
        example: '123456'
    }),
    __param(0, common_1.Param('username')),
    __param(1, common_1.Param('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], ApiTestController.prototype, "pathDemo1", null);
__decorate([
    common_1.Put("/put/demo1"),
    swagger_1.ApiOperation({
        summary: 'put接口练习,传入user对象并添加到数据中'
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", ResultData_1.ResultData)
], ApiTestController.prototype, "putDemo", null);
__decorate([
    common_1.Delete("/delete/demo1/id/:id"),
    swagger_1.ApiOperation({
        summary: 'delete接口练习,传入id数字并删除指定id的对象。通过path传参数'
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApiTestController.prototype, "deleteDemo1", null);
__decorate([
    common_1.Delete("/delete/demo2"),
    swagger_1.ApiOperation({
        summary: 'delete接口练习,传入id数字并删除指定id的对象。通过url传参数'
    }),
    swagger_1.ApiQuery({
        name: 'id',
        description: 'id数字',
        example: 7
    }),
    __param(0, common_1.Query('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApiTestController.prototype, "deleteDemo2", null);
__decorate([
    common_1.Delete("/delete/demo3"),
    swagger_1.ApiOperation({
        summary: 'delete接口练习,传入ids数组并删除数组内的所有。通过body传参数'
    }),
    swagger_1.ApiBody({
        type: ids_entity_1.Ids,
        description: 'id数组',
    }),
    __param(0, common_1.Body("ids")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ApiTestController.prototype, "deleteDemo3", null);
ApiTestController = __decorate([
    common_1.Controller("/api-test"),
    swagger_1.ApiTags("接口调用练习"),
    __metadata("design:paramtypes", [apitest_service_1.ApiTestService])
], ApiTestController);
exports.ApiTestController = ApiTestController;
//# sourceMappingURL=apitest.controller.js.map