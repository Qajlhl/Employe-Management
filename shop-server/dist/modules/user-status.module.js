"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatusModule = void 0;
const common_1 = require("@nestjs/common");
const user_status_controller_1 = require("../controllers/user-status.controller");
const user_status_service_1 = require("../services/user-status.service");
let UserStatusModule = class UserStatusModule {
};
UserStatusModule = __decorate([
    common_1.Module({
        controllers: [user_status_controller_1.UserStatusController],
        providers: [user_status_service_1.UserStatusService],
    })
], UserStatusModule);
exports.UserStatusModule = UserStatusModule;
//# sourceMappingURL=user-status.module.js.map