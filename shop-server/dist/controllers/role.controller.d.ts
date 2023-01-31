import { RoleService } from '../services/role.service';
import { ResultData } from '../utils/ResultData';
import { Role } from '../entity/role.entity';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    findAll(): ResultData;
    findForPage(pno?: number, psize?: number): ResultData;
    deleteById(id: string): ResultData;
    insert(role: Role): ResultData;
    update(role: Role): ResultData;
    findById(id: string): ResultData;
}
