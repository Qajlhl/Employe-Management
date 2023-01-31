import { CheckOutService } from '../services/check-out.service';
import { ResultData } from '../utils/ResultData';
import { CheckOutPosition } from '../entity/check-out-position.entity';
export declare class CheckOutController {
    private readonly checkOutService;
    constructor(checkOutService: CheckOutService);
    getCheckOutPosition(): ResultData;
    saveCheckOutPostion(data: CheckOutPosition): ResultData;
    checkPostion(lat?: number, lng?: number): ResultData;
    checkIn(lat: number, lng: number, req: any): ResultData;
    getRecordSimple(req: any): ResultData;
    getRecordFull(date: string, req: any): ResultData;
    findById(id: string): ResultData;
}
