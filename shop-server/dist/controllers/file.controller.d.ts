import { FileType } from '../entity/file.entity';
import { FileService } from '../services/file.service';
import { ResultData } from '../utils/ResultData';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    upload(file: any, body: FileType): ResultData;
    upload1(file: any, body: FileType): ResultData;
    deleteFile(path: string): ResultData;
}
