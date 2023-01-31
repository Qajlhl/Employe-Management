"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const ResultData_1 = require("../utils/ResultData");
const base_service_1 = require("./base.service");
const fs = require("fs");
const path = require("path");
let AddressService = class AddressService extends base_service_1.BaseService {
    insert(address, token) {
        let res = fs.readFileSync(path.resolve(__dirname, `../../src/utils/data.json`));
        let userInfo = this.getAdminUserByToken(token);
        if (userInfo) {
            let list = this.findAll('address').getData.list;
            let arr = list.filter(item => item.userId == userInfo.id);
            let data = JSON.parse(res.toString());
            let province = data['100000'][address.provinceId];
            let city = data[address.provinceId][address.cityId];
            let area = data[address.cityId][address.areaId];
            let obj = {
                id: new Date().getTime(),
                userId: userInfo.id,
                provinceId: address.provinceId,
                cityId: address.cityId,
                areaId: address.areaId,
                province,
                city,
                area,
                default: arr.length == 0 ? 1 : 0,
                address: address.address
            };
            return this.insertOne(obj, 'address');
        }
        return ResultData_1.ResultData.end(500, {}, '新增失败');
    }
    update(address, token) {
        let res = fs.readFileSync(path.resolve(__dirname, `../../src/utils/data.json`));
        let userInfo = this.getAdminUserByToken(token);
        if (userInfo) {
            console.log(address);
            let data = JSON.parse(res.toString());
            let province = data['100000'][address.provinceId];
            let city = data[address.provinceId][address.cityId];
            let area = data[address.cityId][address.areaId];
            let obj = Object.assign(Object.assign({}, address), { province,
                city,
                area });
            return this.updateOne(obj, 'address');
        }
        return ResultData_1.ResultData.end(500, {}, '新增失败');
    }
    findAllForPage(pno, psize, token) {
        let userInfo = this.getAdminUserByToken(token);
        if (userInfo) {
            let list = this.findAll('address').getData.list;
            return this.findForPage(pno, psize, 'address', () => {
                return list.filter(item => item.userId == userInfo.id).sort((a, b) => b.default - a.default);
            });
        }
        return ResultData_1.ResultData.end(500, {}, '查询失败');
    }
    setDefault(id, token) {
        let userInfo = this.getAdminUserByToken(token);
        if (userInfo) {
            let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/address.table.json`));
            let baseData = JSON.parse(res.toString());
            baseData.data = baseData.data.map(item => {
                if (item.userId == userInfo.id) {
                    item.default = 0;
                }
                if (item.id == id) {
                    item.default = 1;
                }
                return item;
            });
            fs.writeFileSync(path.resolve(__dirname, `../../src/tables/address.table.json`), JSON.stringify(baseData));
            return ResultData_1.ResultData.end(200, {}, "删除成功");
        }
        return ResultData_1.ResultData.end(500, {}, '设置失败');
    }
};
AddressService = __decorate([
    common_1.Injectable()
], AddressService);
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map