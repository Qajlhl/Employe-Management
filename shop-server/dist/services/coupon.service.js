"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponService = void 0;
const common_1 = require("@nestjs/common");
const ResultData_1 = require("../utils/ResultData");
const fs = require("fs");
const path = require("path");
const base_service_1 = require("./base.service");
let CouponService = class CouponService extends base_service_1.BaseService {
    findForPageByExample(pno, psize, name = '', couponTypeId, tableName) {
        return this.findForPage(pno, psize, tableName, () => {
            let res = this.findAll(tableName);
            let CouponTypeList = this.findAll('coupon-type').getData.list;
            let arr = res.getData.list;
            if (name.trim().length > 0) {
                arr = arr.filter(item => {
                    return item.name.indexOf(name) != -1;
                });
            }
            if (couponTypeId) {
                arr = arr.filter(item => {
                    return item.couponTypeId == couponTypeId;
                });
            }
            arr = arr.map(item => {
                let arr = CouponTypeList.filter(itemType => {
                    return itemType.id == item.couponTypeId;
                });
                if (arr.length > 0) {
                    item.couponTypeName = arr[0].name;
                }
                return item;
            });
            return arr;
        });
    }
    insertMultiple(couponMultiple) {
        let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/coupon.table.json`));
        let baseData = JSON.parse(res.toString());
        let arrRes = [];
        for (let i = 0; i < couponMultiple.count; i++) {
            arrRes.push({
                id: new Date().getTime() + '' + i,
                name: couponMultiple.name,
                price: couponMultiple.price,
                targetTime: couponMultiple.targetTime,
                totalPrice: couponMultiple.totalPrice,
                couponTypeId: couponMultiple.couponTypeId,
                status: 0,
                insertTime: new Date().getTime(),
                remark: couponMultiple.remark
            });
        }
        baseData.data = [...baseData.data, ...arrRes];
        fs.writeFileSync(path.resolve(__dirname, `../../src/tables/coupon.table.json`), JSON.stringify(baseData));
        return ResultData_1.ResultData.end(200, {}, "新增成功");
    }
};
CouponService = __decorate([
    common_1.Injectable()
], CouponService);
exports.CouponService = CouponService;
//# sourceMappingURL=coupon.service.js.map