import { MenuService } from '../services/menu.service';
import { ResultData } from '../utils/ResultData';
import { MenuRole } from '../entity/menu-role.entity';
import { MenuTop } from '../entity/menu-top.entity';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    findAllByRoleId(roleId: string): ResultData;
    findAllMenu(): ResultData;
    insertRoleMenu(menuRole: MenuRole): ResultData;
    insert(menuTop: MenuTop): ResultData;
    insertChild(menuTop: MenuTop, pid: string): ResultData;
    update(menuTop: MenuTop): ResultData;
    updateChild(menuTop: MenuTop): ResultData;
    findById(id: string): ResultData;
    deleteById(id: string): ResultData;
}
