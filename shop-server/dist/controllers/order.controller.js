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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("../services/order.service");
const ResultData_1 = require("../utils/ResultData");
const passport_1 = require("@nestjs/passport");
const order_entity_1 = require("../entity/order.entity");
const swagger_1 = require("@nestjs/swagger");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    findForPage(pno = 1, psize = 10, phone, status) {
        return this.orderService.
            findForPageByExample(pno, psize, phone, status, 'order');
    }
    deleteById(id) {
        return this.orderService.deleteById(id, 'order');
    }
    insert(order, req) {
        order.insertTime = new Date().getTime();
        let token = req.headers['authorization'];
        return this.orderService.insert(order, token, 'order');
    }
    findById(id) {
        return this.orderService.findById(id, 'order');
    }
    send(id, postCode) {
        return this.orderService.send(id, postCode, 'order');
    }
    recive(id, postCode) {
        return this.orderService.recive(id, 'order');
    }
};
__decorate([
    common_1.Get('/list/page'),
    swagger_1.ApiOperation({ summary: '分页获取所有的订单' }),
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
        name: 'phone',
        description: '购买人电话',
        example: '大米',
        required: false
    }),
    swagger_1.ApiQuery({
        name: 'status',
        description: '订单类型',
        example: '1',
        required: false
    }),
    __param(0, common_1.Query('pno')),
    __param(1, common_1.Query('psize')),
    __param(2, common_1.Query('phone')),
    __param(3, common_1.Query('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Number]),
    __metadata("design:returntype", ResultData_1.ResultData)
], OrderController.prototype, "findForPage", null);
__decorate([
    common_1.Delete('/delete/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id删除订单' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], OrderController.prototype, "deleteById", null);
__decorate([
    common_1.Put('/insert'),
    swagger_1.ApiOperation({ summary: '新增订单' }),
    __param(0, common_1.Body()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_entity_1.Order, Object]),
    __metadata("design:returntype", ResultData_1.ResultData)
], OrderController.prototype, "insert", null);
__decorate([
    common_1.Get('/find/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id查询订单' }),
    swagger_1.ApiParam({
        name: 'id',
        description: '的id'
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], OrderController.prototype, "findById", null);
__decorate([
    common_1.Get('/send'),
    swagger_1.ApiOperation({ summary: '添加物流编号' }),
    swagger_1.ApiQuery({
        name: 'id',
        description: '订单id'
    }),
    swagger_1.ApiQuery({
        name: 'postCode',
        description: '物流编号'
    }),
    __param(0, common_1.Query('id')), __param(1, common_1.Query('postCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], OrderController.prototype, "send", null);
__decorate([
    common_1.Get('/recive'),
    swagger_1.ApiOperation({ summary: '确认收货' }),
    swagger_1.ApiQuery({
        name: 'id',
        description: '订单id'
    }),
    __param(0, common_1.Query('id')), __param(1, common_1.Query('postCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], OrderController.prototype, "recive", null);
OrderController = __decorate([
    swagger_1.ApiTags("订单接口"),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Controller("/order"),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map