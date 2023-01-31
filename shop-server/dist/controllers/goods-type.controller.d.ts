import { GoodsTypeService } from '../services/goods-type.service';
import { ResultData } from '../utils/ResultData';
import { GoodsType } from '../entity/goods-type.entity';
export declare class GoodsTypeController {
    private readonly goodsTypeService;
    constructor(goodsTypeService: GoodsTypeService);
    findAll(): ResultData;
    findForPage(pno: number, psize: number, name: string, remark: string): ResultData;
    deleteById(id: string): ResultData;
    insert(goodsType: GoodsType): ResultData;
    update(goodsType: GoodsType): ResultData;
    findById(id: string): ResultData;
}
