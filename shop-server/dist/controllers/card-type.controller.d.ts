import { CardTypeService } from '../services/card-type.service';
import { ResultData } from '../utils/ResultData';
import { CardType } from '../entity/card-type.entity';
export declare class CardTypeController {
    private readonly cardTypeService;
    constructor(cardTypeService: CardTypeService);
    findAll(): ResultData;
    findForPage(pno: number, psize: number, name: string, remark: string): ResultData;
    deleteById(id: string): ResultData;
    insert(cardType: CardType): ResultData;
    update(cardType: CardType): ResultData;
    findById(id: string): ResultData;
}
