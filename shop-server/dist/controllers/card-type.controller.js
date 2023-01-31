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
exports.CardTypeController = void 0;
const common_1 = require("@nestjs/common");
const card_type_service_1 = require("../services/card-type.service");
const ResultData_1 = require("../utils/ResultData");
const passport_1 = require("@nestjs/passport");
const card_type_entity_1 = require("../entity/card-type.entity");
const swagger_1 = require("@nestjs/swagger");
let CardTypeController = class CardTypeController {
    constructor(cardTypeService) {
        this.cardTypeService = cardTypeService;
    }
    findAll() {
        return this.cardTypeService.findAll('card-type');
    }
    findForPage(pno = 1, psize = 10, name, remark) {
        return this.cardTypeService.findForPageByExample(pno, psize, name, remark, 'card-type');
    }
    deleteById(id) {
        return this.cardTypeService.deleteById(id, 'card-type');
    }
    insert(cardType) {
        cardType.insertTime = new Date().getTime();
        return this.cardTypeService.insertOne(cardType, 'card-type');
    }
    update(cardType) {
        return this.cardTypeService.updateOne(cardType, 'card-type');
    }
    findById(id) {
        return this.cardTypeService.findById(id, 'card-type');
    }
};
__decorate([
    common_1.Get('/list/all'),
    swagger_1.ApiOperation({ summary: '获取所有的卡类型' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ResultData_1.ResultData)
], CardTypeController.prototype, "findAll", null);
__decorate([
    common_1.Get('/list/page'),
    swagger_1.ApiOperation({ summary: '分页获取所有的卡类型' }),
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
], CardTypeController.prototype, "findForPage", null);
__decorate([
    common_1.Delete('/delete/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id删除卡类型' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CardTypeController.prototype, "deleteById", null);
__decorate([
    common_1.Put('/insert'),
    swagger_1.ApiOperation({ summary: '新增卡类型' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [card_type_entity_1.CardType]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CardTypeController.prototype, "insert", null);
__decorate([
    common_1.Put('/update'),
    swagger_1.ApiOperation({ summary: '修改卡类型' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [card_type_entity_1.CardType]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CardTypeController.prototype, "update", null);
__decorate([
    common_1.Get('/find/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id查询卡类型' }),
    swagger_1.ApiParam({
        name: 'id',
        description: '类型的id'
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CardTypeController.prototype, "findById", null);
CardTypeController = __decorate([
    swagger_1.ApiTags("卡类型接口"),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Controller("/card-type"),
    __metadata("design:paramtypes", [card_type_service_1.CardTypeService])
], CardTypeController);
exports.CardTypeController = CardTypeController;
//# sourceMappingURL=card-type.controller.js.map