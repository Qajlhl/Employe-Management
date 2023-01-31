import { ResultData } from '../utils/ResultData';
import { BaseService } from './base.service';
export declare class UserService extends BaseService {
    createToken(user: any): any;
    findListAll(tableName: string): ResultData;
    findForPageByUserName(pno: number, psize: number, username?: string): ResultData;
    getHello(): string;
    register(phone: string, password: string): ResultData;
    getUserList(): ResultData;
    checkLogin(username: string, password: string): boolean;
    login(username: string, password: string): ResultData;
    loginShop(username: string, password: string): ResultData;
    changePassword(phone: string, password: string): ResultData;
    getVCode(): ResultData;
}
