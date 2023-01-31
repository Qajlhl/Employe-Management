import { ResultData } from '../utils/ResultData';
import { BaseService } from './base.service';
export declare class ApiTestService extends BaseService {
    findByUserNameAndPassWord(username: string, password: string, tableName: string): ResultData;
}
