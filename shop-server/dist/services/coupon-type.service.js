"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponTypeService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("./base.service");
let CouponTypeService = class CouponTypeService extends base_service_1.BaseService {
    findForPageByExample(pno, psize, name = '', remark = '', tableName) {
        return this.findForPage(pno, psize, tableName, () => {
            let res = this.findAll(tableName);
            let arr = res.getData.list;
            if (name.trim().length > 0) {
                arr = arr.filter(item => {
                    return item.name.indexOf(name) != -1;
                });
            }
            if (remark.trim().length > 0) {
                arr = arr.filter(item => {
                    return item.remark.indexOf(remark) != -1;
                });
            }
            return arr;
        });
    }
};
CouponTypeService = __decorate([
    common_1.Injectable()
], CouponTypeService);
exports.CouponTypeService = CouponTypeService;
//# sourceMappingURL=coupon-type.service.js.map