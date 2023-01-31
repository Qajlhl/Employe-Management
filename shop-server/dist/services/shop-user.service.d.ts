import { ResultData } from '../utils/ResultData';
import { BaseService } from './base.service';
export declare class ShopUserService extends BaseService {
    findForPageByExample(pno: number, psize: number, username: string, phone: string, freeze: number, beginTime: string, endTime: string, hasCard: number, tableName: string): ResultData;
    setFreeze(id: string, freeze: number, tableName: string): ResultData;
    addLike(id: string, token: any): ResultData;
    deleteLike(id: string, token: any): ResultData;
    getLikeList(pno: number, psize: number, token: any): ResultData;
}
