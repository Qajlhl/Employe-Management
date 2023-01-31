import { ResultData } from '../utils/ResultData';
import { BaseService } from './base.service';
export declare class NewsService extends BaseService {
    findForPageByExample(pno: number, psize: number, name: string, newsTypeId: number, tableName: string): ResultData;
}
