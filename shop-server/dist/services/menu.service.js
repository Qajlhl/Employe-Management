"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const ResultData_1 = require("../utils/ResultData");
const fs = require("fs");
const path = require("path");
const base_service_1 = require("./base.service");
let MenuService = class MenuService extends base_service_1.BaseService {
    findAllByRoleId(roleId) {
        let roleMenuRes = this.findAll('role-menu').getData.list;
        let menuIds = roleMenuRes.filter(item => item.roleId == roleId ? true : false).map(item => item.menuId);
        let menuRes = this.findAll('menu').getData.list;
        let menuParent = menuRes.filter(item => menuIds.indexOf(item.id) != -1);
        menuParent.forEach(item => {
            if (item.children) {
                item.children = item.children.filter(itemChild => {
                    return menuIds.indexOf(itemChild.id) != -1;
                });
            }
        });
        console.log(roleId, menuParent);
        return ResultData_1.ResultData.end(200, menuParent, '');
    }
    insertMenuRole(menuRole) {
        let arr = [];
        menuRole.ids.forEach((item, index) => {
            arr.push({
                id: new Date().getTime() + index,
                roleId: menuRole.roleId,
                menuId: item
            });
        });
        let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/role-menu.table.json`));
        let baseData = JSON.parse(res.toString());
        let arr1 = baseData.data.filter(item => {
            if (item.roleId == menuRole.roleId) {
                return false;
            }
            else {
                return true;
            }
        });
        baseData.data = [...arr1, ...arr];
        fs.writeFileSync(path.resolve(__dirname, `../../src/tables/role-menu.table.json`), JSON.stringify(baseData));
        return ResultData_1.ResultData.end(200, {}, "操作成功");
    }
    insertTopMenu(menuTop) {
        let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/menu.table.json`));
        let baseData = JSON.parse(res.toString());
        baseData.data.push({
            id: menuTop.id,
            name: menuTop.name,
            icon: menuTop.icon
        });
        fs.writeFileSync(path.resolve(__dirname, `../../src/tables/menu.table.json`), JSON.stringify(baseData));
        return ResultData_1.ResultData.end(200, {}, "操作成功");
    }
    insertChildMenu(menuTop, pid) {
        let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/menu.table.json`));
        let baseData = JSON.parse(res.toString());
        baseData.data = baseData.data.map(item => {
            if (item.id == pid) {
                if (!item.children) {
                    item.children = [];
                }
                item.children.push({
                    id: menuTop.id,
                    name: menuTop.name,
                    icon: menuTop.icon,
                    url: menuTop.url
                });
            }
            return item;
        });
        fs.writeFileSync(path.resolve(__dirname, `../../src/tables/menu.table.json`), JSON.stringify(baseData));
        return ResultData_1.ResultData.end(200, {}, "操作成功");
    }
    updateTopMenu(menuTop) {
        let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/menu.table.json`));
        let baseData = JSON.parse(res.toString());
        baseData.data = baseData.data.map(item => {
            if (item.id == menuTop.id) {
                item.name = menuTop.name;
                item.icon = menuTop.icon;
            }
            return item;
        });
        fs.writeFileSync(path.resolve(__dirname, `../../src/tables/menu.table.json`), JSON.stringify(baseData));
        return ResultData_1.ResultData.end(200, {}, "操作成功");
    }
    updateChildMenu(menuTop) {
        let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/menu.table.json`));
        let baseData = JSON.parse(res.toString());
        baseData.data = baseData.data.map(item => {
            if (item.children) {
                item.children = item.children.map(itemChild => {
                    if (itemChild.id == menuTop.id) {
                        itemChild.name = menuTop.name;
                        itemChild.icon = menuTop.icon;
                        itemChild.url = menuTop.url;
                    }
                    return itemChild;
                });
            }
            return item;
        });
        fs.writeFileSync(path.resolve(__dirname, `../../src/tables/menu.table.json`), JSON.stringify(baseData));
        return ResultData_1.ResultData.end(200, {}, "操作成功");
    }
    findById(id) {
        let menuList = this.findAll('menu').getData.list;
        let arr = menuList.filter(item => item.id == id);
        if (arr.length == 1) {
            return ResultData_1.ResultData.end(200, arr[0], "查询成功");
        }
        else {
            let arr1 = [];
            menuList.forEach(item => {
                if (item.children) {
                    item.children.forEach((item1) => {
                        if (item1.id == id) {
                            arr1.push(item1);
                        }
                    });
                }
            });
            if (arr1.length > 0) {
                return ResultData_1.ResultData.end(200, arr1[0], "查询成功");
            }
            else {
                return ResultData_1.ResultData.end(500, {}, "未找到菜单");
            }
        }
    }
    deleteOneById(id) {
        let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/menu.table.json`));
        let baseData = JSON.parse(res.toString());
        let arr = baseData.data.filter(item => item.id != id);
        if (arr.length < baseData.data.length) {
            baseData.data = arr;
        }
        else {
            baseData.data = baseData.data.map(item => {
                if (item.children) {
                    item.children = item.children.filter(itemChild => {
                        return itemChild.id != id;
                    });
                }
                return item;
            });
        }
        fs.writeFileSync(path.resolve(__dirname, `../../src/tables/menu.table.json`), JSON.stringify(baseData));
        return ResultData_1.ResultData.end(200, {}, "操作成功");
    }
};
MenuService = __decorate([
    common_1.Injectable()
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map