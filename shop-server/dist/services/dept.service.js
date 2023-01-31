"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeptService = void 0;
const common_1 = require("@nestjs/common");
const ResultData_1 = require("../utils/ResultData");
const base_service_1 = require("./base.service");
let DeptService = class DeptService extends base_service_1.BaseService {
    findForPageByExample(pno, psize, name = '', tableName) {
        return this.findForPage(pno, psize, tableName, () => {
            let res = this.findAll(tableName);
            let goodsTypeList = this.findAll('goods-type').getData.list;
            let arr = res.getData.list;
            if (name.trim().length > 0) {
                arr = arr.filter(item => {
                    return item.name.indexOf(name) != -1;
                });
            }
            return arr;
        });
    }
    findDeptAndUser() {
        let deptList = this.findAll('dept').getData.list;
        let userList = this.findAll('user').getData.list;
        let arr = deptList.map(item => {
            let userListNew = userList.filter(itemUser => {
                if (item.id == itemUser.deptId) {
                    return true;
                }
                else {
                    return false;
                }
            });
            item.children = userListNew;
            return item;
        });
        return ResultData_1.ResultData.end(200, arr, '查询成功');
    }
    deleteDeptUser(id, tableName) {
        try {
            let user = this.findById(id, 'user').getData;
            if (user.deptId == undefined || user.deptId == '') {
                return ResultData_1.ResultData.end(500, {}, '该员工已被移除');
            }
            user.deptId = '';
            this.updateOne(user, 'user');
        }
        catch (e) {
            return ResultData_1.ResultData.end(500, {}, e.toString());
        }
        return ResultData_1.ResultData.end(200, {}, '移除成功');
    }
    addUser(ids, id, tableName) {
        let userList = this.findAll('user').getData.list;
        userList.forEach(item => {
            if (item.deptId == id) {
                item.deptId = '';
                this.updateOne(item, 'user');
            }
            if (ids.indexOf(item.id + '') != -1) {
                item.deptId = id;
                this.updateOne(item, 'user');
            }
        });
        return ResultData_1.ResultData.end(200, {}, '加入成功');
    }
};
DeptService = __decorate([
    common_1.Injectable()
], DeptService);
exports.DeptService = DeptService;
//# sourceMappingURL=dept.service.js.map