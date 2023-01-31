"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTestModule = void 0;
const common_1 = require("@nestjs/common");
const apitest_controller_1 = require("../controllers/apitest.controller");
const apitest_service_1 = require("../services/apitest.service");
let ApiTestModule = class ApiTestModule {
};
ApiTestModule = __decorate([
    common_1.Module({
        controllers: [apitest_controller_1.ApiTestController],
        providers: [apitest_service_1.ApiTestService],
    })
], ApiTestModule);
exports.ApiTestModule = ApiTestModule;
//# sourceMappingURL=apitest.module.js.map