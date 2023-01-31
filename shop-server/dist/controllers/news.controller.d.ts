import { NewsService } from '../services/news.service';
import { ResultData } from '../utils/ResultData';
import { Request } from 'express';
import { News } from '../entity/news.entity';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    findForPage(pno: number, psize: number, name: string, newsTypeId: number): ResultData;
    deleteById(id: string): ResultData;
    insert(news: News, req: Request): ResultData;
    update(news: News): ResultData;
    findById(id: string): ResultData;
}
