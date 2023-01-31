import { ResultData } from '../utils/ResultData';
import { BaseService } from './base.service';
export declare class GoodsService extends BaseService {
    findForPageByExample(pno: number, psize: number, name: string, isOnSale: number, goodsTypeId: number, tableName: string): ResultData;
    setOnSale(id: string, isOnSale: number, tableName: string): ResultData;
}
