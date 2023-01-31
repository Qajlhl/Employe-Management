import { CouponService } from '../services/coupon.service';
import { ResultData } from '../utils/ResultData';
import { CouponMultiple } from '../entity/coupon-multiple.entity';
import { Coupon } from '../entity/coupon.entity';
export declare class CouponController {
    private readonly couponService;
    constructor(couponService: CouponService);
    findForPage(pno: number, psize: number, name: string, couponTypeId: number): ResultData;
    deleteById(id: string): ResultData;
    insert(coupon: Coupon): ResultData;
    update(coupon: Coupon): ResultData;
    findById(id: string): ResultData;
    insertMultiple(couponMultiple: CouponMultiple): ResultData;
}
