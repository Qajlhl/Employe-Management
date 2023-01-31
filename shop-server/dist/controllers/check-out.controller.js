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
exports.CheckOutController = void 0;
const common_1 = require("@nestjs/common");
const check_out_service_1 = require("../services/check-out.service");
const ResultData_1 = require("../utils/ResultData");
const check_out_position_entity_1 = require("../entity/check-out-position.entity");
const swagger_1 = require("@nestjs/swagger");
let CheckOutController = class CheckOutController {
    constructor(checkOutService) {
        this.checkOutService = checkOutService;
    }
    getCheckOutPosition() {
        return this.checkOutService.getCheckOutPosition();
    }
    saveCheckOutPostion(data) {
        return this.checkOutService.updateOne(data, 'check-out-position');
    }
    checkPostion(lat = 1, lng = 10) {
        return this.checkOutService.
            checkInOrOut(lat, lng);
    }
    checkIn(lat = 1, lng = 10, req) {
        let token = req.headers['authorization'];
        return this.checkOutService.checkIn(lat, lng, token);
    }
    getRecordSimple(req) {
        let token = req.headers['authorization'];
        return this.checkOutService.getRecordSimple(token);
    }
    getRecordFull(date, req) {
        let token = req.headers['authorization'];
        return this.checkOutService.getRecordFull(date, token);
    }
    findById(id) {
        return this.checkOutService.findById(id, 'check-out-record');
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: '获取考勤范围信息' }),
    common_1.Get('/get/position'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ResultData_1.ResultData)
], CheckOutController.prototype, "getCheckOutPosition", null);
__decorate([
    swagger_1.ApiOperation({ summary: '修改考勤范围信息' }),
    common_1.Put('/update/position'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [check_out_position_entity_1.CheckOutPosition]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CheckOutController.prototype, "saveCheckOutPostion", null);
__decorate([
    common_1.Get('/in-out/position'),
    swagger_1.ApiOperation({ summary: '根据经纬度查询是否在考勤范围内' }),
    swagger_1.ApiQuery({
        name: 'lat',
        description: '纬度',
        example: 0
    }),
    swagger_1.ApiQuery({
        name: 'lng',
        description: '经度',
        example: 0
    }),
    __param(0, common_1.Query('lat')),
    __param(1, common_1.Query('lng')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CheckOutController.prototype, "checkPostion", null);
__decorate([
    common_1.Get('/in-out/check-in'),
    swagger_1.ApiOperation({ summary: '根据经纬度进行考勤打卡' }),
    swagger_1.ApiQuery({
        name: 'lat',
        description: '纬度',
        example: 0
    }),
    swagger_1.ApiQuery({
        name: 'lng',
        description: '经度',
        example: 0
    }),
    __param(0, common_1.Query('lat')),
    __param(1, common_1.Query('lng')),
    __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CheckOutController.prototype, "checkIn", null);
__decorate([
    common_1.Get('/in-out/record-simple'),
    swagger_1.ApiOperation({ summary: '获取当前用户今日的上下班打卡粗略记录' }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CheckOutController.prototype, "getRecordSimple", null);
__decorate([
    common_1.Get('/in-out/record-full'),
    swagger_1.ApiOperation({ summary: '根据指定日期获取完整的考勤记录' }),
    swagger_1.ApiQuery({
        name: 'date',
        description: '日期yyyy-MM-dd 如2021-01-01',
        example: '2021-01-01'
    }),
    __param(0, common_1.Query('date')),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CheckOutController.prototype, "getRecordFull", null);
__decorate([
    common_1.Get('/in-out/find/id/:id'),
    swagger_1.ApiOperation({ summary: '根据考勤记录的id获取指定的考勤记录' }),
    swagger_1.ApiParam({
        name: 'id',
        description: '考勤记录的id'
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], CheckOutController.prototype, "findById", null);
CheckOutController = __decorate([
    swagger_1.ApiTags("考勤接口"),
    swagger_1.ApiBearerAuth(),
    common_1.Controller("/check-out"),
    __metadata("design:paramtypes", [check_out_service_1.CheckOutService])
], CheckOutController);
exports.CheckOutController = CheckOutController;
//# sourceMappingURL=check-out.controller.js.map