import { OrderService } from '../services/order.service';
import { ResultData } from '../utils/ResultData';
import { Order } from '../entity/order.entity';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    findForPage(pno: number, psize: number, phone: string, status: number): ResultData;
    deleteById(id: string): ResultData;
    insert(order: Order, req: any): ResultData;
    findById(id: string): ResultData;
    send(id: string, postCode: string): ResultData;
    recive(id: string, postCode: string): ResultData;
}
