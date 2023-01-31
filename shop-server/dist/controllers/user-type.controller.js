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
exports.UserTypeController = void 0;
const common_1 = require("@nestjs/common");
const user_type_service_1 = require("../services/user-type.service");
const ResultData_1 = require("../utils/ResultData");
const passport_1 = require("@nestjs/passport");
const user_type_entity_1 = require("../entity/user-type.entity");
const swagger_1 = require("@nestjs/swagger");
let UserTypeController = class UserTypeController {
    constructor(userTypeService) {
        this.userTypeService = userTypeService;
    }
    findAll() {
        return this.userTypeService.findAll('user-type');
    }
    findForPage(pno = 1, psize = 10, name, remark) {
        return this.userTypeService.findForPageByExample(pno, psize, name, remark, 'user-type');
    }
    deleteById(id) {
        return this.userTypeService.deleteById(id, 'user-type');
    }
    insert(userType) {
        userType.insertTime = new Date().getTime();
        return this.userTypeService.insertOne(userType, 'user-type');
    }
    update(userType) {
        return this.userTypeService.updateOne(userType, 'user-type');
    }
    findById(id) {
        return this.userTypeService.findById(id, 'user-type');
    }
};
__decorate([
    common_1.Get('/list/all'),
    swagger_1.ApiOperation({ summary: '获取所有的会员类型' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserTypeController.prototype, "findAll", null);
__decorate([
    common_1.Get('/list/page'),
    swagger_1.ApiOperation({ summary: '分页获取所有的会员类型' }),
    swagger_1.ApiQuery({
        name: 'pno',
        description: '页号',
        example: 1
    }),
    swagger_1.ApiQuery({
        name: 'psize',
        description: '每页多少条',
        example: 10
    }),
    swagger_1.ApiQuery({
        name: 'name',
        description: '类型名称（模糊查询）',
        example: '数码',
        required: false
    }),
    swagger_1.ApiQuery({
        name: 'remark',
        description: '备注（模糊查询）',
        example: '备注',
        required: false
    }),
    __param(0, common_1.Query('pno')),
    __param(1, common_1.Query('psize')),
    __param(2, common_1.Query('name')),
    __param(3, common_1.Query('remark')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserTypeController.prototype, "findForPage", null);
__decorate([
    common_1.Delete('/delete/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id删除会员类型' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserTypeController.prototype, "deleteById", null);
__decorate([
    common_1.Put('/insert'),
    swagger_1.ApiOperation({ summary: '新增会员类型' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_type_entity_1.UserType]),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserTypeController.prototype, "insert", null);
__decorate([
    common_1.Put('/update'),
    swagger_1.ApiOperation({ summary: '修改会员类型' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_type_entity_1.UserType]),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserTypeController.prototype, "update", null);
__decorate([
    common_1.Get('/find/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id查询会员类型' }),
    swagger_1.ApiParam({
        name: 'id',
        description: '类型的id'
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], UserTypeController.prototype, "findById", null);
UserTypeController = __decorate([
    swagger_1.ApiTags("会员类型接口"),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Controller("/user-type"),
    __metadata("design:paramtypes", [user_type_service_1.UserTypeService])
], UserTypeController);
exports.UserTypeController = UserTypeController;
//# sourceMappingURL=user-type.controller.js.map