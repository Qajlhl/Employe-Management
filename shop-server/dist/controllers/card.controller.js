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
exports.CardController = void 0;
const common_1 = require("@nestjs/common");
const card_service_1 = require("../services/card.service");
const ResultData_1 = require("../utils/ResultData");
const passport_1 = require("@nestjs/passport");
const card_multiple_entity_1 = require("../entity/card-multiple.entity");
const card_entity_1 = require("../entity/card.entity");
const swagger_1 = require("@nestjs/swagger");
let CardController = class CardController {
    constructor(cardService) {
        this.cardService = cardService;
    }
    findForPage(pno = 1, psize = 10, name, num, cardTypeId) {
        return this.cardService.
            findForPageByExample(pno, psize, name, num, cardTypeId, 'card');
    }
    deleteById(id) {
        return this.cardService.deleteById(id, 'card');
    }
    insert(card) {
        let cardType = this.cardService.findById(card.cardTypeId + '', 'card-type').getData;
        if (cardType.id) {
            card.insertTime = new Date().getTime();
            card.status = 0;
            card = this.cardService.initCardNum(card);
            return this.cardService.insertOne(card, 'card');
        }
        else {
            return ResultData_1.ResultData.end(500, {}, '??????????????????');
        }
    }
    update(card) {
        return this.cardService.updateOne(card, 'card');
    }
    findById(id) {
        return this.cardService.findById(id, 'card');
    }
    insertMultiple(cardMultiple) {
        return this.cardService.insertMultiple(cardMultiple);
    }
    openCard(num, userId) {
        return this.cardService.openCard(num, userId);
    }
    backCard(num) {
        return this.cardService.backCard(num);
    }
    findByNum(num) {
        return this.cardService.findByNum(num);
    }
};
__decorate([
    common_1.Get('/list/page'),
    swagger_1.ApiOperation({ summary: '??????????????????????????????' }),
    swagger_1.ApiQuery({
        name: 'pno',
        description: '??????',
        example: 1
    }),
    swagger_1.ApiQuery({
        name: 'psize',
        description: '???????????????',
        example: 10
    }),
    swagger_1.ApiQuery({
        name: 'name',
        description: '?????????????????????????????????',
        example: '??????',
        required: false
    }),
    swagger_1.ApiQuery({
        name: 'cardTypeId',
        description: '???????????????id',
        example: '1',
        required: false
    }),
    swagger_1.ApiQuery({
        name: 'num',
        description: '????????????'
    }),
    __param(0, common_1.Query('pno')),
    __param(1, common_1.Query('psize')),
    __param(2, common_1.Query('name')),
    __param(3, common_1.Query('num')),
    __param(4, common_1.Query('cardTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, Number]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CardController.prototype, "findForPage", null);
__decorate([
    common_1.Delete('/delete/id/:id'),
    swagger_1.ApiOperation({ summary: '??????id???????????????' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CardController.prototype, "deleteById", null);
__decorate([
    common_1.Put('/insert'),
    swagger_1.ApiOperation({ summary: '???????????????' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [card_entity_1.Card]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CardController.prototype, "insert", null);
__decorate([
    common_1.Put('/update'),
    swagger_1.ApiOperation({ summary: '???????????????' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [card_entity_1.Card]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CardController.prototype, "update", null);
__decorate([
    common_1.Get('/find/id/:id'),
    swagger_1.ApiOperation({ summary: '??????id???????????????' }),
    swagger_1.ApiParam({
        name: 'id',
        description: '???id'
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CardController.prototype, "findById", null);
__decorate([
    common_1.Put("/insert/multiple"),
    swagger_1.ApiOperation({ summary: '???????????????????????????' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [card_multiple_entity_1.CardMultiple]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CardController.prototype, "insertMultiple", null);
__decorate([
    common_1.Get("/open/card"),
    swagger_1.ApiOperation({ summary: '????????????' }),
    swagger_1.ApiQuery({
        name: 'num',
        description: '????????????'
    }),
    swagger_1.ApiQuery({
        name: 'userId',
        description: '??????id'
    }),
    __param(0, common_1.Query('num')), __param(1, common_1.Query('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CardController.prototype, "openCard", null);
__decorate([
    common_1.Get("/back/card"),
    swagger_1.ApiOperation({ summary: '????????????' }),
    swagger_1.ApiQuery({
        name: 'num',
        description: '????????????'
    }),
    __param(0, common_1.Query('num')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CardController.prototype, "backCard", null);
__decorate([
    common_1.Get("/find/num"),
    swagger_1.ApiOperation({ summary: '???????????????????????????' }),
    swagger_1.ApiQuery({
        name: 'num',
        description: '????????????'
    }),
    __param(0, common_1.Query('num')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CardController.prototype, "findByNum", null);
CardController = __decorate([
    swagger_1.ApiTags("???????????????"),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Controller("/card"),
    __metadata("design:paramtypes", [card_service_1.CardService])
], CardController);
exports.CardController = CardController;
//# sourceMappingURL=card.controller.js.map