import { GoodsService } from '../services/goods.service';
import { ResultData } from '../utils/ResultData';
import { Goods } from '../entity/goods.entity';
export declare class GoodsController {
    private readonly goodsService;
    constructor(goodsService: GoodsService);
    findForPage(pno: number, psize: number, name: string, isOnSale: number, goodsTypeId: number): ResultData;
    deleteById(id: string): ResultData;
    insert(goods: Goods): ResultData;
    update(goods: Goods): ResultData;
    findById(id: string): ResultData;
    setOnSale(id: string, isOnSale: number): ResultData;
}
