import { ResultData } from '../utils/ResultData';
import { BaseService } from './base.service';
export declare class CheckOutService extends BaseService {
    getCheckOutPosition(): ResultData;
    check(lat1: number, lng1: number, lat2: number, lng2: number): number;
    checkInOrOut(lat: number, lng: number): ResultData;
    checkIn(lat: number, lng: number, token: any): ResultData;
    getRecordSimple(token: any): ResultData;
    getRecordFull(date: string, token: any): ResultData;
}
