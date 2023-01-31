import { ResultData } from '../utils/ResultData';
import { BaseService } from './base.service';
import { Order } from '../entity/order.entity';
export declare class OrderService extends BaseService {
    findForPageByExample(pno: number, psize: number, phone: string, status: number, tableName: string): ResultData;
    insert(order: Order, token: any, tableName: string): ResultData;
    send(id: string, postCode: string, tableName: string): ResultData;
    recive(id: string, tableName: string): ResultData;
}
