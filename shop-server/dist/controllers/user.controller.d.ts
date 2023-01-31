import { UserService } from '../services/user.service';
import { ResultData } from '../utils/ResultData';
import { User } from '../entity/user.entity';
import { UserParam } from '../entity/user-param.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    login(user: UserParam): ResultData;
    loginShop(user: UserParam): ResultData;
    code(req: any): ResultData;
    changePassword(req: any, phone: string, code: string, password: string): ResultData;
    register(req: any, phone: string, code: string, password: string): ResultData;
    getMenuList(): ResultData;
    getUser(id: string): ResultData;
    insert(user: User): ResultData;
    update(user: User): ResultData;
    getUserListAll(): ResultData;
    getUserListForPageByUserName(pno: number, psize: number, username: string): ResultData;
    deleteById(id: string): ResultData;
    getVCode(): ResultData;
}
