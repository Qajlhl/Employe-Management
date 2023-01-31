"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardService = void 0;
const common_1 = require("@nestjs/common");
const ResultData_1 = require("../utils/ResultData");
const fs = require("fs");
const path = require("path");
const base_service_1 = require("./base.service");
let CardService = class CardService extends base_service_1.BaseService {
    findForPageByExample(pno, psize, name = '', num = '', cardTypeId, tableName) {
        return this.findForPage(pno, psize, tableName, () => {
            let res = this.findAll(tableName);
            let cardTypeList = this.findAll('card-type').getData.list;
            let arr = res.getData.list;
            if (name.trim().length > 0) {
                arr = arr.filter(item => {
                    return item.name.indexOf(name) != -1;
                });
            }
            if (num.trim().length > 0) {
                arr = arr.filter(item => {
                    return item.num.indexOf(num) != -1;
                });
            }
            if (cardTypeId) {
                arr = arr.filter(item => {
                    return item.cardTypeId == cardTypeId;
                });
            }
            arr = arr.map(item => {
                let arr = cardTypeList.filter(itemType => {
                    return itemType.id == item.cardTypeId;
                });
                if (arr.length > 0) {
                    item.cardTypeName = arr[0].name;
                }
                return item;
            });
            return arr;
        });
    }
    initCardNum(card) {
        let cardType = this.findById(card.cardTypeId + '', 'card-type').getData;
        let prefix = 'HY-' + cardType.bm + '-';
        let cardList = this.findAll('card').getData.list;
        let arr = cardList.filter(item => item.cardTypeId == card.cardTypeId).sort((a, b) => Number(a.id) - Number(b.id));
        let num;
        if (arr.length > 0) {
            let lastCard = arr.pop();
            num = Number(lastCard.num.split('-')[2]) + 10000000 + 1;
        }
        else {
            num = 100000001;
        }
        let cardNum = prefix + new String(num).substring(1);
        card.num = cardNum;
        return card;
    }
    insertMultiple(cardMultiple) {
        let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/card.table.json`));
        let baseData = JSON.parse(res.toString());
        let cardType = this.findById(cardMultiple.cardTypeId + '', 'card-type').getData;
        let prefix = 'HY-' + cardType.bm + '-';
        let cardList = this.findAll('card').getData.list;
        let arr = cardList.filter(item => item.cardTypeId == cardMultiple.cardTypeId).sort((a, b) => Number(a.id) - Number(b.id));
        let num;
        if (arr.length > 0) {
            let lastCard = arr.pop();
            num = Number(lastCard.num.split('-')[2]) + 10000000 + 1;
        }
        else {
            num = 10000001;
        }
        let arrRes = [];
        for (let i = 0; i < cardMultiple.count; i++) {
            arrRes.push({
                id: new Date().getTime() + '' + i,
                name: cardMultiple.name,
                cardTypeId: cardMultiple.cardTypeId,
                status: 0,
                num: prefix + new String(num + i).substring(1),
                insertTime: new Date().getTime(),
                logo: cardMultiple.logo,
                remark: cardMultiple.remark
            });
        }
        baseData.data = [...baseData.data, ...arrRes];
        console.log(baseData.data);
        fs.writeFileSync(path.resolve(__dirname, `../../src/tables/card.table.json`), JSON.stringify(baseData));
        return ResultData_1.ResultData.end(200, {}, "新增成功");
    }
    openCard(num, userId) {
        let cardList = this.findAll('card').getData.list;
        let cardArr = cardList.filter(item => item.num == num);
        if (cardArr.length > 0) {
            let user = this.findById(userId, 'shop-user').getData;
            let card = cardArr[0];
            card.status = 1;
            this.updateOne(card, 'card');
            user.cardNumber = num;
            this.updateOne(user, 'shop-user');
            return ResultData_1.ResultData.end(200, {}, "开卡成功");
        }
        else {
            return ResultData_1.ResultData.end(500, {}, "卡号不存在");
        }
    }
    backCard(num) {
        let cardList = this.findAll('card').getData.list;
        let cardArr = cardList.filter(item => item.num == num);
        if (cardArr.length > 0) {
            let card = cardArr[0];
            if (card.status == 0) {
                return ResultData_1.ResultData.end(500, {}, "当前卡号未开卡");
            }
            let userList = this.findAll('shop-user').getData.list;
            let userArr = userList.filter(item => item.cardNumber == num);
            if (userArr.length == 0) {
                return ResultData_1.ResultData.end(500, {}, "未找到该卡的用户");
            }
            let user = userArr[0];
            user.cardNumber = '';
            this.updateOne(user, 'shop-user');
            card.status = 0;
            this.updateOne(card, 'card');
            return ResultData_1.ResultData.end(200, {}, "退卡成功");
        }
        else {
            return ResultData_1.ResultData.end(500, {}, "卡号不存在");
        }
    }
    findByNum(num) {
        console.log(num);
        let cardList = this.findAll('card').getData.list;
        let cardArr = cardList.filter(item => item.num == num);
        if (cardArr.length > 0) {
            return ResultData_1.ResultData.end(200, cardArr[0], "查询成功");
        }
        else {
            return ResultData_1.ResultData.end(500, {}, "卡号不存在");
        }
    }
};
CardService = __decorate([
    common_1.Injectable()
], CardService);
exports.CardService = CardService;
//# sourceMappingURL=card.service.js.map