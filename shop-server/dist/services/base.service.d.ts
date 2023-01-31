import { ResultData } from '../utils/ResultData';
import { FileType } from '../entity/file.entity';
export declare class BaseService {
    getAdminUserByToken(token: any): any;
    findAll(tableName: string): ResultData;
    findAllByExample(tableName: string, fn: Function): ResultData;
    findById(id: string, tableName: string): ResultData;
    insertOne(item: any, tableName: string): ResultData;
    updateOne(item: any, tableName: string): ResultData;
    findForPage(pno: number, psize: number, tableName: string, fn: Function): ResultData;
    deleteById(id: string, tableName: any): ResultData;
    deleteByIds(ids: Array<any>, tableName: any): ResultData;
    upload(file: any, body: FileType): ResultData;
    deleteFile(p: string): ResultData;
}
