"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultData = void 0;
class ResultData {
    constructor(code, data, msg) {
        this.code = code;
        this.data = data;
        this.msg = msg;
    }
    static end(code, data, msg) {
        return new ResultData(code, data, msg);
    }
    get getData() {
        return this.data;
    }
}
exports.ResultData = ResultData;
//# sourceMappingURL=ResultData.js.map