import { ResultData } from '../utils/ResultData';
import { BaseService } from './base.service';
export declare class DeptService extends BaseService {
    findForPageByExample(pno: number, psize: number, name: string, tableName: string): ResultData;
    findDeptAndUser(): ResultData;
    deleteDeptUser(id: string, tableName: string): ResultData;
    addUser(ids: Array<any>, id: string, tableName: string): ResultData;
}
