import { ResultData } from '../utils/ResultData';
import { BaseService } from './base.service';
import { CouponMultiple } from '../entity/coupon-multiple.entity';
export declare class CouponService extends BaseService {
    findForPageByExample(pno: number, psize: number, name: string, couponTypeId: number, tableName: string): ResultData;
    insertMultiple(couponMultiple: CouponMultiple): ResultData;
}
