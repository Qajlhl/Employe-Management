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
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;
const swagger_1 = require("@nestjs/swagger");
class News {
}
__decorate([
    swagger_1.ApiProperty({
        description: '新闻id（增加时不需要传）',
        example: '1',
    }),
    __metadata("design:type", Number)
], News.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '新闻名称',
        example: '科技',
    }),
    __metadata("design:type", String)
], News.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '新闻内容',
        example: '备注',
    }),
    __metadata("design:type", String)
], News.prototype, "content", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '新闻logo',
        example: '/public/news/xx.png',
    }),
    __metadata("design:type", String)
], News.prototype, "logo", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '新闻摘要',
        example: '摘要',
    }),
    __metadata("design:type", String)
], News.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '新闻类型id',
        example: '1',
    }),
    __metadata("design:type", Number)
], News.prototype, "newsTypeId", void 0);
exports.News = News;
//# sourceMappingURL=news.entity.js.map