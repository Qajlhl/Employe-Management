import { ApiTestService } from '../services/apitest.service';
import { ResultData } from '../utils/ResultData';
import { User } from '../entity/user.entity';
import { UserParam } from '../entity/user-param.entity';
export declare class ApiTestController {
    private readonly apiTestService;
    constructor(apiTestService: ApiTestService);
    getDemo1(): ResultData;
    getDemo2(username: string, password: string): ResultData;
    postDemo1(): ResultData;
    postDemo2(user: UserParam): ResultData;
    pathDemo1(username: string, password: string): ResultData;
    putDemo(user: User): ResultData;
    deleteDemo1(id: string): ResultData;
    deleteDemo2(id: string): ResultData;
    deleteDemo3(ids: Array<any>): ResultData;
}
