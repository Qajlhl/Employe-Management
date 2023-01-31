"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("./base.service");
let NewsService = class NewsService extends base_service_1.BaseService {
    findForPageByExample(pno, psize, name = '', newsTypeId, tableName) {
        return this.findForPage(pno, psize, tableName, () => {
            let res = this.findAll(tableName);
            let newsTypeList = this.findAll('news-type').getData.list;
            let arr = res.getData.list;
            if (name.trim().length > 0) {
                arr = arr.filter(item => {
                    return item.name.indexOf(name) != -1;
                });
            }
            if (newsTypeId) {
                arr = arr.filter(item => {
                    return item.newsTypeId == newsTypeId;
                });
            }
            arr = arr.map(item => {
                let arr = newsTypeList.filter(itemType => {
                    return itemType.id == item.newsTypeId;
                });
                if (arr.length > 0) {
                    item.newsTypeName = arr[0].name;
                }
                return item;
            });
            return arr.sort((a, b) => b.insertTime - a.insertTime);
        });
    }
};
NewsService = __decorate([
    common_1.Injectable()
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map