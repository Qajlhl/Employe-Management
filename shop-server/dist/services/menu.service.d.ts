import { ResultData } from '../utils/ResultData';
import { BaseService } from './base.service';
import { MenuRole } from '../entity/menu-role.entity';
import { MenuTop } from '../entity/menu-top.entity';
export declare class MenuService extends BaseService {
    findAllByRoleId(roleId: string): ResultData;
    insertMenuRole(menuRole: MenuRole): ResultData;
    insertTopMenu(menuTop: MenuTop): ResultData;
    insertChildMenu(menuTop: MenuTop, pid: string): ResultData;
    updateTopMenu(menuTop: MenuTop): ResultData;
    updateChildMenu(menuTop: MenuTop): ResultData;
    findById(id: string): ResultData;
    deleteOneById(id: string): ResultData;
}
