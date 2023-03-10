"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsTypeModule = void 0;
const common_1 = require("@nestjs/common");
const news_type_controller_1 = require("../controllers/news-type.controller");
const news_type_service_1 = require("../services/news-type.service");
let NewsTypeModule = class NewsTypeModule {
};
NewsTypeModule = __decorate([
    common_1.Module({
        controllers: [news_type_controller_1.NewsTypeController],
        providers: [news_type_service_1.NewsTypeService],
    })
], NewsTypeModule);
exports.NewsTypeModule = NewsTypeModule;
//# sourceMappingURL=news-type.module.js.map