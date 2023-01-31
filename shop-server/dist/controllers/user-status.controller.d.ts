import { UserStatusService } from '../services/user-status.service';
import { ResultData } from '../utils/ResultData';
import { UserStatus } from '../entity/user-status.entity';
export declare class UserStatusController {
    private readonly userStatusService;
    constructor(userStatusService: UserStatusService);
    findAll(): ResultData;
    findForPage(pno: number, psize: number, name: string, remark: string): ResultData;
    deleteById(id: string): ResultData;
    insert(userStatus: UserStatus): ResultData;
    update(userStatus: UserStatus): ResultData;
    findById(id: string): ResultData;
}
