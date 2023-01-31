import { UserTypeService } from '../services/user-type.service';
import { ResultData } from '../utils/ResultData';
import { UserType } from '../entity/user-type.entity';
export declare class UserTypeController {
    private readonly userTypeService;
    constructor(userTypeService: UserTypeService);
    findAll(): ResultData;
    findForPage(pno: number, psize: number, name: string, remark: string): ResultData;
    deleteById(id: string): ResultData;
    insert(userType: UserType): ResultData;
    update(userType: UserType): ResultData;
    findById(id: string): ResultData;
}
