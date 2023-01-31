import { CardService } from '../services/card.service';
import { ResultData } from '../utils/ResultData';
import { CardMultiple } from '../entity/card-multiple.entity';
import { Card } from '../entity/card.entity';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    findForPage(pno: number, psize: number, name: string, num: string, cardTypeId: number): ResultData;
    deleteById(id: string): ResultData;
    insert(card: Card): ResultData;
    update(card: Card): ResultData;
    findById(id: string): ResultData;
    insertMultiple(cardMultiple: CardMultiple): ResultData;
    openCard(num: string, userId: string): ResultData;
    backCard(num: string): ResultData;
    findByNum(num: string): ResultData;
}
