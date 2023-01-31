"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const ResultData_1 = require("../utils/ResultData");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const base_service_1 = require("./base.service");
const svgCaptcha = require('svg-captcha');
let UserService = class UserService extends base_service_1.BaseService {
    createToken(user) {
        return jwt.sign(user, 'shop-service', { expiresIn: 36000 });
    }
    findListAll(tableName) {
        let list = this.findAll(tableName).getData.list;
        let roleList = this.findAll('role').getData.list;
        let deptList = this.findAll('dept').getData.list;
        list = list.map(item => {
            console.log(item);
            let role = roleList.filter(itemRole => {
                if (item.roleId == itemRole.id) {
                    return true;
                }
                else {
                    return false;
                }
            });
            let dept = deptList.filter(itemDept => {
                if (item.deptId == itemDept.id) {
                    return true;
                }
                else {
                    return false;
                }
            });
            if (role.length > 0) {
                item.roleName = role[0].name;
            }
            else {
                item.roleName = '';
            }
            if (dept.length > 0) {
                item.deptName = dept[0].name;
            }
            else {
                item.deptName = '';
            }
            return item;
        });
        return ResultData_1.ResultData.end(200, { list }, '查询成功');
    }
    findForPageByUserName(pno, psize, username = '') {
        return this.findForPage(pno, psize, 'user', () => {
            let res = this.findAll('user');
            let roleList = this.findAll('role').getData.list;
            let deptList = this.findAll('dept').getData.list;
            let list = res.getData.list;
            list = list.filter((item) => {
                return item.username.indexOf(username) != -1;
            });
            list = list.map(item => {
                let role = roleList.filter(itemRole => {
                    if (item.roleId == itemRole.id) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                let dept = deptList.filter(itemDept => {
                    if (item.deptId == itemDept.id) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                if (role.length > 0) {
                    item.roleName = role[0].name;
                }
                else {
                    item.roleName = '';
                }
                if (dept.length > 0) {
                    item.deptName = dept[0].name;
                }
                else {
                    item.deptName = '';
                }
                return item;
            });
            return list;
        });
    }
    getHello() {
        return 'Hello World!';
    }
    register(phone, password) {
        let shopUserList = this.findAll('shop-user').getData.list;
        let arr = shopUserList.filter(item => item.phone == phone);
        if (arr.length > 0) {
            return ResultData_1.ResultData.end(500, {}, "你的手机号码已被注册");
        }
        else {
            let obj = {
                id: new Date().getTime(),
                username: phone,
                password: password,
                nickname: "",
                userTypeId: "1",
                birthday: "",
                sex: "",
                phone: phone,
                face: "",
                freeze: "0",
                insertTime: new Date().getTime(),
                cardNumber: ""
            };
            this.insertOne(obj, 'shop-user');
            return ResultData_1.ResultData.end(200, obj, "注册成功，请登录");
        }
    }
    getUserList() {
        let res = fs.readFileSync(path.resolve(__dirname, '../../src/tables/user.table.json'));
        let list = JSON.parse(res.toString()).data;
        return ResultData_1.ResultData.end(200, { list }, "success");
    }
    checkLogin(username, password) {
        console.log(username, password);
        let res = fs.readFileSync(path.resolve(__dirname, '../../src/tables/user.table.json'));
        let res1 = fs.readFileSync(path.resolve(__dirname, '../../src/tables/shop-user.table.json'));
        let list = JSON.parse(res.toString()).data;
        let list1 = JSON.parse(res1.toString()).data;
        let arr = list.filter(item => {
            return item.username == username && item.password == password;
        });
        let arr1 = list1.filter(item => {
            return item.username == username && item.password == password;
        });
        return arr.length > 0 || arr1.length > 0 ? true : false;
    }
    login(username, password) {
        let res = fs.readFileSync(path.resolve(__dirname, '../../src/tables/user.table.json'));
        let list = JSON.parse(res.toString()).data;
        let arr = list.filter(item => {
            return item.username == username && item.password == password;
        });
        if (arr.length > 0) {
            let userInfo = arr[0];
            let deptInfo = this.findById(userInfo.deptId, 'dept').getData;
            userInfo.deptName = deptInfo.name;
            let token = this.createToken(userInfo);
            return ResultData_1.ResultData.end(200, { token, userInfo: arr[0] }, '登录成功');
        }
        else {
            return ResultData_1.ResultData.end(500, {}, '用户名或密码错误');
        }
    }
    loginShop(username, password) {
        let res = fs.readFileSync(path.resolve(__dirname, '../../src/tables/shop-user.table.json'));
        let list = JSON.parse(res.toString()).data;
        let arr = list.filter(item => {
            return item.phone == username && item.password == password;
        });
        if (arr.length > 0) {
            let token = this.createToken(arr[0]);
            return ResultData_1.ResultData.end(200, { token, userInfo: arr[0] }, '登录成功');
        }
        else {
            return ResultData_1.ResultData.end(500, {}, '用户名或密码错误');
        }
    }
    changePassword(phone, password) {
        let userList = this.findAll('shop-user').getData.list;
        let arr = userList.filter(item => item.phone == phone);
        if (arr.length > 0) {
            let user = arr[0];
            user.password = password;
            return this.updateOne(user, 'shop-user');
        }
        return ResultData_1.ResultData.end(500, {}, '手机号码不存在');
    }
    getVCode() {
        let captcha = svgCaptcha.create({
            size: 4,
            ignoreChars: '0oOiI1l',
            noise: 4,
            color: true,
            background: '#cc9966',
        });
        return ResultData_1.ResultData.end(200, { src: captcha.data, value: captcha.text }, 'ok');
    }
};
UserService = __decorate([
    common_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map