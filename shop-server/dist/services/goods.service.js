"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("./base.service");
let GoodsService = class GoodsService extends base_service_1.BaseService {
    findForPageByExample(pno, psize, name = '', isOnSale, goodsTypeId, tableName) {
        return this.findForPage(pno, psize, tableName, () => {
            let res = this.findAll(tableName);
            let goodsTypeList = this.findAll('goods-type').getData.list;
            let arr = res.getData.list;
            if (name.trim().length > 0) {
                arr = arr.filter(item => {
                    return item.name.indexOf(name) != -1;
                });
            }
            if (isOnSale) {
                arr = arr.filter(item => {
                    return item.isOnSale == isOnSale;
                });
            }
            if (goodsTypeId) {
                arr = arr.filter(item => {
                    return item.goodsTypeId == goodsTypeId;
                });
            }
            arr = arr.map(item => {
                let arr = goodsTypeList.filter(itemType => {
                    return itemType.id == item.goodsTypeId;
                });
                if (arr.length > 0) {
                    item.goodsTypeName = arr[0].name;
                }
                return item;
            });
            return arr;
        });
    }
    setOnSale(id, isOnSale, tableName) {
        let goods = this.findById(id, tableName).getData;
        goods.isOnSale = isOnSale;
        return this.updateOne(goods, tableName);
    }
};
GoodsService = __decorate([
    common_1.Injectable()
], GoodsService);
exports.GoodsService = GoodsService;
//# sourceMappingURL=goods.service.js.map