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
exports.ShopUserController = void 0;
const common_1 = require("@nestjs/common");
const shop_user_service_1 = require("../services/shop-user.service");
const ResultData_1 = require("../utils/ResultData");
const shop_user_entity_1 = require("../entity/shop-user.entity");
const swagger_1 = require("@nestjs/swagger");
let ShopUserController = class ShopUserController {
    constructor(shopUserService) {
        this.shopUserService = shopUserService;
    }
    findForPage(pno = 1, psize = 10, username, phone, freeze, beginTime = '', endTime = '', hasCard) {
        return this.shopUserService.
            findForPageByExample(pno, psize, username, phone, freeze, beginTime, endTime, hasCard, 'shop-user');
    }
    deleteById(id) {
        return this.shopUserService.deleteById(id, 'shop-user');
    }
    insert(shopUser) {
        shopUser.insertTime = new Date().getTime();
        shopUser.birthday = new Date(shopUser.birthday).getTime() + '';
        shopUser.freeze = 0;
        return this.shopUserService.insertOne(shopUser, 'shop-user');
    }
    update(shopUser) {
        shopUser.birthday = new Date(shopUser.birthday).getTime() + '';
        return this.shopUserService.updateOne(shopUser, 'shop-user');
    }
    findById(id) {
        return this.shopUserService.findById(id, 'shop-user');
    }
    setFreeze(id, freeze) {
        return this.shopUserService.setFreeze(id, freeze, 'shop-user');
    }
    addLike(id, request) {
        let token = request.headers['authorization'];
        return this.shopUserService.addLike(id, token);
    }
    deleteLike(id, request) {
        let token = request.headers['authorization'];
        return this.shopUserService.deleteLike(id, token);
    }
    getLikeList(pno = 1, psize = 10, request) {
        let token = request.headers['authorization'];
        return this.shopUserService.getLikeList(pno, psize, token);
    }
};
__decorate([
    common_1.Get('/list/page'),
    swagger_1.ApiOperation({ summary: '分页获取所有的会员' }),
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
        name: 'username',
        description: '会员账号（模糊）',
        example: 'test',
        required: false
    }),
    swagger_1.ApiQuery({
        name: 'phone',
        description: '会员手机号（模糊）',
        example: '18988888888',
        required: false
    }),
    swagger_1.ApiQuery({
        name: 'freeze',
        description: '会员状态 1冻结，0正常',
        example: '1',
        required: false
    }),
    swagger_1.ApiQuery({
        name: 'beginTime',
        description: '起始时间,格式要求yyyy-MM-dd',
        example: '2020-01-01',
        required: false
    }),
    swagger_1.ApiQuery({
        name: 'endTime',
        description: '终止时间,格式要求yyyy-MM-dd',
        example: '2020-10-10',
        required: false
    }),
    swagger_1.ApiQuery({
        name: 'hasCard',
        description: '用户是否绑定会员卡（0，未绑定，1，已绑定）',
        example: '0/1',
        required: false
    }),
    __param(0, common_1.Query('pno')),
    __param(1, common_1.Query('psize')),
    __param(2, common_1.Query('username')),
    __param(3, common_1.Query('phone')),
    __param(4, common_1.Query('freeze')),
    __param(5, common_1.Query('beginTime')),
    __param(6, common_1.Query('endTime')),
    __param(7, common_1.Query('hasCard')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, Number, String, String, Number]),
    __metadata("design:returntype", ResultData_1.ResultData)
], ShopUserController.prototype, "findForPage", null);
__decorate([
    common_1.Delete('/delete/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id删除会员' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], ShopUserController.prototype, "deleteById", null);
__decorate([
    common_1.Put('/insert'),
    swagger_1.ApiOperation({ summary: '新增会员' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shop_user_entity_1.ShopUser]),
    __metadata("design:returntype", ResultData_1.ResultData)
], ShopUserController.prototype, "insert", null);
__decorate([
    common_1.Put('/update'),
    swagger_1.ApiOperation({ summary: '修改会员' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shop_user_entity_1.ShopUser]),
    __metadata("design:returntype", ResultData_1.ResultData)
], ShopUserController.prototype, "update", null);
__decorate([
    common_1.Get('/find/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id查询会员' }),
    swagger_1.ApiParam({
        name: 'id',
        description: '的id'
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], ShopUserController.prototype, "findById", null);
__decorate([
    common_1.Get('/set/freeze'),
    swagger_1.ApiOperation({ summary: '设置会员的冻结和解冻' }),
    swagger_1.ApiQuery({
        name: 'id',
        description: '会员id'
    }),
    swagger_1.ApiQuery({
        name: 'freeze',
        description: '会员状态，0正常，1冻结'
    }),
    __param(0, common_1.Query('id')), __param(1, common_1.Query('freeze')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", ResultData_1.ResultData)
], ShopUserController.prototype, "setFreeze", null);
__decorate([
    common_1.Put('/add/like/:id'),
    swagger_1.ApiOperation({ summary: '会员收藏商品' }),
    swagger_1.ApiParam({
        name: 'id',
        description: '商品的id'
    }),
    __param(0, common_1.Param("id")), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", ResultData_1.ResultData)
], ShopUserController.prototype, "addLike", null);
__decorate([
    common_1.Delete('/delete/like/:id'),
    swagger_1.ApiOperation({ summary: '删除收藏商品' }),
    swagger_1.ApiParam({
        name: 'id',
        description: '商品的id'
    }),
    __param(0, common_1.Param("id")), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", ResultData_1.ResultData)
], ShopUserController.prototype, "deleteLike", null);
__decorate([
    common_1.Get('/like/list'),
    swagger_1.ApiOperation({ summary: '分页获取会员收藏列表' }),
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
    __param(0, common_1.Query('pno')),
    __param(1, common_1.Query('psize')),
    __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", ResultData_1.ResultData)
], ShopUserController.prototype, "getLikeList", null);
ShopUserController = __decorate([
    swagger_1.ApiTags("会员接口"),
    swagger_1.ApiBearerAuth(),
    common_1.Controller("/shop-user"),
    __metadata("design:paramtypes", [shop_user_service_1.ShopUserService])
], ShopUserController);
exports.ShopUserController = ShopUserController;
//# sourceMappingURL=shop-user.controller.js.map