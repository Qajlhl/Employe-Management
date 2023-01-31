export declare class ResultData {
    private code;
    private data;
    private msg;
    constructor(code: number, data: any, msg: string);
    static end(code: number, data: any, msg: string): ResultData;
    get getData(): any;
}
