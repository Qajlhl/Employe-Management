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
exports.FileController = void 0;
const common_1 = require("@nestjs/common");
const file_entity_1 = require("../entity/file.entity");
const platform_express_1 = require("@nestjs/platform-express");
const file_service_1 = require("../services/file.service");
const ResultData_1 = require("../utils/ResultData");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
let FileController = class FileController {
    constructor(fileService) {
        this.fileService = fileService;
    }
    upload(file, body) {
        return this.fileService.upload(file, body);
    }
    upload1(file, body) {
        return this.fileService.upload(file, body);
    }
    deleteFile(path) {
        return this.fileService.deleteFile(path);
    }
};
__decorate([
    common_1.Post('upload/test'),
    swagger_1.ApiOperation({ summary: '无鉴权文件上传接口(contentType为multipart/form-data)' }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, file_entity_1.FileType]),
    __metadata("design:returntype", ResultData_1.ResultData)
], FileController.prototype, "upload", null);
__decorate([
    common_1.Post('upload'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiOperation({ summary: '有鉴权文件上传接口(contentType为multipart/form-data)' }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, file_entity_1.FileType]),
    __metadata("design:returntype", ResultData_1.ResultData)
], FileController.prototype, "upload1", null);
__decorate([
    common_1.Get('delete'),
    swagger_1.ApiOperation({ summary: '文件删除接口' }),
    swagger_1.ApiQuery({
        name: 'path',
        description: '要删除文件的路径'
    }),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Query("path")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], FileController.prototype, "deleteFile", null);
FileController = __decorate([
    swagger_1.ApiTags("文件接口"),
    swagger_1.ApiBearerAuth(),
    common_1.Controller("/file"),
    __metadata("design:paramtypes", [file_service_1.FileService])
], FileController);
exports.FileController = FileController;
//# sourceMappingURL=file.controller.js.map