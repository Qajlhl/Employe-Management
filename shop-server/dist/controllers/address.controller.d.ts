import { AddressService } from '../services/address.service';
import { ResultData } from '../utils/ResultData';
import { Address } from '../entity/address.entity';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    findForPage(pno: number, psize: number, req: any): ResultData;
    insert(address: Address, req: any): ResultData;
    update(address: Address, req: any): ResultData;
    findById(id: string): ResultData;
    deleteById(id: string): ResultData;
    setDefault(id: string, req: any): ResultData;
}
