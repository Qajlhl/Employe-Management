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
exports.NewsController = void 0;
const common_1 = require("@nestjs/common");
const news_service_1 = require("../services/news.service");
const ResultData_1 = require("../utils/ResultData");
const passport_1 = require("@nestjs/passport");
const news_entity_1 = require("../entity/news.entity");
const swagger_1 = require("@nestjs/swagger");
let NewsController = class NewsController {
    constructor(newsService) {
        this.newsService = newsService;
    }
    findForPage(pno = 1, psize = 10, name, newsTypeId) {
        return this.newsService.
            findForPageByExample(pno, psize, name, newsTypeId, 'news');
    }
    deleteById(id) {
        return this.newsService.deleteById(id, 'news');
    }
    insert(news, req) {
        console.log(req.headers['authorization']);
        let token = req.headers['authorization'];
        let user = this.newsService.getAdminUserByToken(token);
        if (user) {
            news.author = user.nickname;
        }
        news.insertTime = new Date().getTime();
        return this.newsService.insertOne(news, 'news');
    }
    update(news) {
        return this.newsService.updateOne(news, 'news');
    }
    findById(id) {
        return this.newsService.findById(id, 'news');
    }
};
__decorate([
    common_1.Get('/list/page'),
    swagger_1.ApiOperation({ summary: '分页获取所有的新闻' }),
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
        description: '新闻标题（模糊查询）',
        example: '大米',
        required: false
    }),
    swagger_1.ApiQuery({
        name: 'newsTypeId',
        description: '新闻类型id',
        example: '1',
        required: false
    }),
    __param(0, common_1.Query('pno')),
    __param(1, common_1.Query('psize')),
    __param(2, common_1.Query('name')),
    __param(3, common_1.Query('newsTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Number]),
    __metadata("design:returntype", ResultData_1.ResultData)
], NewsController.prototype, "findForPage", null);
__decorate([
    common_1.Delete('/delete/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id删除新闻' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], NewsController.prototype, "deleteById", null);
__decorate([
    common_1.Put('/insert'),
    swagger_1.ApiOperation({ summary: '新增新闻' }),
    __param(0, common_1.Body()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [news_entity_1.News, Object]),
    __metadata("design:returntype", ResultData_1.ResultData)
], NewsController.prototype, "insert", null);
__decorate([
    common_1.Put('/update'),
    swagger_1.ApiOperation({ summary: '修改新闻' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [news_entity_1.News]),
    __metadata("design:returntype", ResultData_1.ResultData)
], NewsController.prototype, "update", null);
__decorate([
    common_1.Get('/find/id/:id'),
    swagger_1.ApiOperation({ summary: '根据id查询新闻' }),
    swagger_1.ApiParam({
        name: 'id',
        description: '的id'
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", ResultData_1.ResultData)
], NewsController.prototype, "findById", null);
NewsController = __decorate([
    swagger_1.ApiTags("新闻接口"),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Controller("/news"),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsController);
exports.NewsController = NewsController;
//# sourceMappingURL=news.controller.js.map