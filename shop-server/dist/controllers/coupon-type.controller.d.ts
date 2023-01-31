import { CouponTypeService } from '../services/coupon-type.service';
import { ResultData } from '../utils/ResultData';
import { CouponType } from '../entity/coupon-type.entity';
export declare class CouponTypeController {
    private readonly couponTypeService;
    constructor(couponTypeService: CouponTypeService);
    findAll(): ResultData;
    findForPage(pno: number, psize: number, name: string, remark: string): ResultData;
    deleteById(id: string): ResultData;
    insert(couponType: CouponType): ResultData;
    update(couponType: CouponType): ResultData;
    findById(id: string): ResultData;
}
