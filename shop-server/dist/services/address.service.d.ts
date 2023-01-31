import { ResultData } from '../utils/ResultData';
import { BaseService } from './base.service';
import { Address } from '../entity/address.entity';
export declare class AddressService extends BaseService {
    insert(address: Address, token: any): ResultData;
    update(address: Address, token: any): ResultData;
    findAllForPage(pno: number, psize: number, token: any): ResultData;
    setDefault(id: string, token: any): ResultData;
}
