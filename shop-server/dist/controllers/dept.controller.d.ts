import { DeptService } from '../services/dept.service';
import { ResultData } from '../utils/ResultData';
import { Dept } from '../entity/dept.entity';
export declare class DeptController {
    private readonly deptService;
    constructor(deptService: DeptService);
    findAll(): ResultData;
    findForPage(pno: number, psize: number, name: string): ResultData;
    deleteById(id: string): ResultData;
    insert(dept: Dept): ResultData;
    update(dept: Dept): ResultData;
    findById(id: string): ResultData;
    findDeptAndUser(): ResultData;
    deleteDeptUser(id: string): ResultData;
    addUser(ids: Array<any>, id: string): ResultData;
}
