"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let RequestInterceptor = class RequestInterceptor {
    intercept(context, next) {
        let ctx = context.switchToHttp();
        let request = ctx.getRequest();
        return next.handle().pipe(operators_1.map(data => data));
    }
};
RequestInterceptor = __decorate([
    common_1.Injectable()
], RequestInterceptor);
exports.RequestInterceptor = RequestInterceptor;
//# sourceMappingURL=request.interceptor.js.map