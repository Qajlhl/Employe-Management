"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./controllers/app.controller");
const app_service_1 = require("./services/app.service");
const user_module_1 = require("./modules/user.module");
const apitest_module_1 = require("./modules/apitest.module");
const auth_module_1 = require("./modules/auth.module");
const menu_module_1 = require("./modules/menu.module");
const goods_type_module_1 = require("./modules/goods-type.module");
const user_type_module_1 = require("./modules/user-type.module");
const news_type_module_1 = require("./modules/news-type.module");
const card_type_module_1 = require("./modules/card-type.module");
const file_module_1 = require("./modules/file.module");
const goods_module_1 = require("./modules/goods.module");
const news_module_1 = require("./modules/news.module");
const address_module_1 = require("./modules/address.module");
const card_module_1 = require("./modules/card.module");
const order_module_1 = require("./modules/order.module");
const coupon_module_1 = require("./modules/coupon.module");
const shop_user_module_1 = require("./modules/shop-user.module");
const coupon_type_module_1 = require("./modules/coupon-type.module");
const role_module_1 = require("./modules/role.module");
const dept_module_1 = require("./modules/dept.module");
const user_status_module_1 = require("./modules/user-status.module");
const check_out_module_1 = require("./modules/check-out.module");
const core_1 = require("@nestjs/core");
const http_exception_filter_1 = require("./exception/http-exception.filter");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule, auth_module_1.AuthModule, apitest_module_1.ApiTestModule, menu_module_1.MenuModule,
            role_module_1.RoleModule, goods_type_module_1.GoodsTypeModule, user_type_module_1.UserTypeModule,
            card_type_module_1.CardTypeModule, coupon_type_module_1.CouponTypeModule, file_module_1.FileModule,
            goods_module_1.GoodsModule, news_type_module_1.NewsTypeModule, shop_user_module_1.ShopUserModule,
            news_module_1.NewsModule, card_module_1.CardModule, coupon_module_1.CouponModule, address_module_1.AddressModule, order_module_1.OrderModule,
            dept_module_1.DeptModule, user_status_module_1.UserStatusModule, check_out_module_1.CheckOutModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: http_exception_filter_1.HttpExceptionFilter,
            }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map