import { NewsTypeService } from '../services/news-type.service';
import { ResultData } from '../utils/ResultData';
import { NewsType } from '../entity/news-type.entity';
export declare class NewsTypeController {
    private readonly newsTypeService;
    constructor(newsTypeService: NewsTypeService);
    findAll(): ResultData;
    findForPage(pno: number, psize: number, name: string, remark: string): ResultData;
    deleteById(id: string): ResultData;
    insert(newsType: NewsType): ResultData;
    update(newsType: NewsType): ResultData;
    findById(id: string): ResultData;
}
