import { ResultData } from '../utils/ResultData';
import { BaseService } from './base.service';
import { Card } from '../entity/card.entity';
import { CardMultiple } from '../entity/card-multiple.entity';
export declare class CardService extends BaseService {
    findForPageByExample(pno: number, psize: number, name: string, num: string, cardTypeId: number, tableName: string): ResultData;
    initCardNum(card: Card): Card;
    insertMultiple(cardMultiple: CardMultiple): ResultData;
    openCard(num: string, userId: string): ResultData;
    backCard(num: string): ResultData;
    findByNum(num: string): ResultData;
}
