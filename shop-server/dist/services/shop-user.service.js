"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopUserService = void 0;
const common_1 = require("@nestjs/common");
const ResultData_1 = require("../utils/ResultData");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
console.log(jwt);
const base_service_1 = require("./base.service");
let ShopUserService = class ShopUserService extends base_service_1.BaseService {
    findForPageByExample(pno, psize, username = '', phone = '', freeze, beginTime, endTime, hasCard, tableName) {
        return this.findForPage(pno, psize, tableName, () => {
            let res = this.findAll(tableName);
            let userTypeList = this.findAll('user-type').getData.list;
            let arr = res.getData.list;
            if (username.trim().length > 0) {
                arr = arr.filter(item => {
                    return item.username.indexOf(username) != -1;
                });
            }
            if (phone.trim().length > 0) {
                arr = arr.filter(item => {
                    return item.phone.indexOf(phone) != -1;
                });
            }
            if (freeze) {
                arr = arr.filter(item => {
                    return item.freeze == freeze;
                });
            }
            if (beginTime.trim().length > 0) {
                arr = arr.filter(item => {
                    return item.birthday >= new Date(beginTime + ' 00:00:00').getTime();
                });
            }
            if (endTime.trim().length > 0) {
                arr = arr.filter(item => {
                    return item.birthday <= new Date(endTime + ' 23:59:59').getTime();
                });
            }
            if (hasCard) {
                if (hasCard == 1) {
                    arr = arr.filter(item => {
                        return item.cardNumber != undefined && item.cardNumber.trim().length > 0;
                    });
                }
                else if (hasCard == 0) {
                    arr = arr.filter(item => {
                        return item.cardNumber == undefined || item.cardNumber == '';
                    });
                }
            }
            arr = arr.map(item => {
                let arr = userTypeList.filter(itemType => {
                    return itemType.id == item.userTypeId;
                });
                if (arr.length > 0) {
                    item.userTypeName = arr[0].name;
                }
                return item;
            });
            return arr;
        });
    }
    setFreeze(id, freeze, tableName) {
        let shopUser = this.findById(id, tableName).getData;
        shopUser.freeze = freeze;
        return this.updateOne(shopUser, tableName);
    }
    addLike(id, token) {
        let tokenInfo = this.getAdminUserByToken(token);
        let likeList = this.findAll('shop-user-like').getData.list;
        if (tokenInfo) {
            let userId = tokenInfo.id;
            let arr = likeList.filter(item => item.goodsId == id && userId == item.userId);
            if (arr.length > 0) {
                return ResultData_1.ResultData.end(500, {}, '已经收藏过该商品');
            }
            return this.insertOne({
                id: new Date().getTime(),
                userId,
                goodsId: id
            }, 'shop-user-like');
        }
        return ResultData_1.ResultData.end(500, {}, '收藏失败');
    }
    deleteLike(id, token) {
        let tokenInfo = this.getAdminUserByToken(token);
        let likeList = this.findAll('shop-user-like').getData.list;
        if (tokenInfo) {
            let userId = tokenInfo.id;
            let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/shop-user-like.table.json`));
            let baseData = JSON.parse(res.toString());
            for (let i = 0; i < baseData.data.length; i++) {
                if (id == baseData.data[i].goodsId && userId == baseData.data[i].userId) {
                    baseData.data.splice(i, 1);
                }
            }
            fs.writeFileSync(path.resolve(__dirname, `../../src/tables/shop-user-like.table.json`), JSON.stringify(baseData));
            return ResultData_1.ResultData.end(200, {}, "删除成功");
        }
        return ResultData_1.ResultData.end(500, {}, '收藏失败');
    }
    getLikeList(pno = 1, psize = 10, token) {
        let tokenInfo = this.getAdminUserByToken(token);
        if (tokenInfo) {
            let userId = tokenInfo.id;
            let likeList = this.findAll('shop-user-like').getData.list;
            let goodsArr = likeList.filter(item => item.userId == userId).map(item => {
                return item.goodsId;
            });
            let goodsList = this.findAll('goods').getData.list;
            console.log(goodsArr, goodsList);
            let arr = goodsList.filter(item => {
                return goodsArr.indexOf(item.id) != -1;
            });
            return this.findForPage(pno, psize, 'shop-user-like', () => arr);
        }
        return ResultData_1.ResultData.end(500, {}, '获取失败');
    }
};
ShopUserService = __decorate([
    common_1.Injectable()
], ShopUserService);
exports.ShopUserService = ShopUserService;
//# sourceMappingURL=shop-user.service.js.map