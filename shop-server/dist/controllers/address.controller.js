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
exports.AddressController = void 0;
const common_1 = require("@nestjs/common");
const address_service_1 = require("../services/address.service");
const ResultData_1 = require("../utils/ResultData");
const address_entity_1 = require("../entity/address.entity");
const swagger_1 = require("@nestjs/swagger");
let AddressController = class AddressController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    findForPage(pno = 1, psize = 10, req) {
        let token = req.headers['authorization'];
        return this.addressService.findAllForPage(pno, psize, token);
    }
    insert(address, req) {
        let token = req.headers['authorization'];
        return this.addressService.insert(address, token);
    }
    update(address, req) {
        let token = req.headers['authorization'];
        return this.addressService.update(address, token);
    }
    findById(id) {
        return this.addressService.findById(id, 'address');
    }
    deleteById(id) {
        return this.addressService.deleteById(id, 'address');
    }
    setDefault(id, req) {
        let token = req.headers['authorization'];
        return this.addressService.setDefault(id, token);
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
    __param(0, common_1.Query('pno')),
    __param(1, common_1.Query('psize')),
    __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", ResultData_1.ResultData)
], AddressController.prototype, "findForPage", null);
__decorate([
    common_1.Put('/insert'),
    swagger_1.ApiOperation({ summary: '新增收货地址' }),
    __param(0, common_1.Body()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [address_entity_1.Address, Object]),
    __metadata("design:returntype", ResultData_1.ResultData)
], AddressController.prototype, "insert", null);
__decorate([
    common_1.Put('/update'),
    swagger_1.ApiOperation({ summary: '编辑收货地址' }),
    __param(0, common_1.Body()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [address_entity_1.Address, Object]),
    __metadata("design:returntype", ResultData_1.ResultData)
], AddressController.prototype, "update", null);
__decorate([
    common_1.Get('/find/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id查询收货地址' }),
    swagger_1.ApiParam({
        name: 'id',
        description: '地址的id'
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], AddressController.prototype, "findById", null);
__decorate([
    common_1.Delete('/delete/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id删除地址' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], AddressController.prototype, "deleteById", null);
__decorate([
    common_1.Post('/default/id/:id'),
    swagger_1.ApiOperation({ summary: '设置默认' }),
    __param(0, common_1.Param('id')), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", ResultData_1.ResultData)
], AddressController.prototype, "setDefault", null);
AddressController = __decorate([
    swagger_1.ApiTags("收货地址接口"),
    swagger_1.ApiBearerAuth(),
    common_1.Controller("/address"),
    __metadata("design:paramtypes", [address_service_1.AddressService])
], AddressController);
exports.AddressController = AddressController;
//# sourceMappingURL=address.controller.js.map