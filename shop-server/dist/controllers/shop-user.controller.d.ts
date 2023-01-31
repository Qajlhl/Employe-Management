import { ShopUserService } from '../services/shop-user.service';
import { ResultData } from '../utils/ResultData';
import { ShopUser } from '../entity/shop-user.entity';
export declare class ShopUserController {
    private readonly shopUserService;
    constructor(shopUserService: ShopUserService);
    findForPage(pno: number, psize: number, username: string, phone: string, freeze: number, beginTime: string, endTime: string, hasCard: number): ResultData;
    deleteById(id: string): ResultData;
    insert(shopUser: ShopUser): ResultData;
    update(shopUser: ShopUser): ResultData;
    findById(id: string): ResultData;
    setFreeze(id: string, freeze: number): ResultData;
    addLike(id: string, request: any): ResultData;
    deleteLike(id: string, request: any): ResultData;
    getLikeList(pno: number, psize: number, request: any): ResultData;
}
