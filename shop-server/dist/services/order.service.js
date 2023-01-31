"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const ResultData_1 = require("../utils/ResultData");
const base_service_1 = require("./base.service");
let OrderService = class OrderService extends base_service_1.BaseService {
    findForPageByExample(pno, psize, phone = '', status, tableName) {
        return this.findForPage(pno, psize, tableName, () => {
            let res = this.findAll(tableName);
            let arr = res.getData.list;
            if (phone.trim().length > 0) {
                arr = arr.filter(item => {
                    return item.phone.indexOf(phone) != -1;
                });
            }
            if (status) {
                arr = arr.filter(item => {
                    return item.status == status;
                });
            }
            return arr.sort((a, b) => b.insertTime - a.insertTime);
        });
    }
    insert(order, token, tableName) {
        let userInfo = this.getAdminUserByToken(token);
        if (userInfo) {
            if (userInfo.password != order.password) {
                return ResultData_1.ResultData.end(500, {}, '密码错误');
            }
            let obj = Object.assign(Object.assign({}, order), { id: new Date().getTime(), orderNo: 'DD-' + new Date().getTime(), userId: userInfo.id, phone: userInfo.phone, nickname: userInfo.nickname, status: 1 });
            return this.insertOne(obj, 'order');
        }
        return ResultData_1.ResultData.end(500, {}, '创建订单失败');
    }
    send(id, postCode, tableName) {
        let obj = this.findById(id, tableName).getData;
        obj.status = 2;
        obj.postCode = postCode;
        return this.updateOne(obj, tableName);
    }
    recive(id, tableName) {
        let obj = this.findById(id, tableName).getData;
        obj.status = 3;
        return this.updateOne(obj, tableName);
    }
};
OrderService = __decorate([
    common_1.Injectable()
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map