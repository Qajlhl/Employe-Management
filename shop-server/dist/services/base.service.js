"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const ResultData_1 = require("../utils/ResultData");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
class BaseService {
    getAdminUserByToken(token) {
        let t = token.replace('Bearer', '').trim();
        let res = jwt.verify(t, 'shop-service');
        return res;
    }
    findAll(tableName) {
        let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/${tableName}.table.json`));
        let list = JSON.parse(res.toString()).data;
        return ResultData_1.ResultData.end(200, { list }, "查询成功");
    }
    findAllByExample(tableName, fn) {
        let list = fn();
        return ResultData_1.ResultData.end(200, { list }, "查询成功");
    }
    findById(id, tableName) {
        let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/${tableName}.table.json`));
        let list = JSON.parse(res.toString()).data;
        let obj = list.filter((item) => item.id == id);
        if (obj.length > 0) {
            return ResultData_1.ResultData.end(200, obj[0], "查询成功");
        }
        else {
            return ResultData_1.ResultData.end(500, {}, "暂无数据");
        }
    }
    insertOne(item, tableName) {
        let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/${tableName}.table.json`));
        let baseData = JSON.parse(res.toString());
        item.id = new Date().getTime();
        baseData.data.push(item);
        fs.writeFileSync(path.resolve(__dirname, `../../src/tables/${tableName}.table.json`), JSON.stringify(baseData));
        return ResultData_1.ResultData.end(200, item, "新增成功");
    }
    updateOne(item, tableName) {
        if (item.id) {
            let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/${tableName}.table.json`));
            let baseData = JSON.parse(res.toString());
            baseData.data.forEach((dataItem) => {
                if (dataItem.id == item.id) {
                    for (let key in item) {
                        dataItem[key] = item[key];
                    }
                }
            });
            fs.writeFileSync(path.resolve(__dirname, `../../src/tables/${tableName}.table.json`), JSON.stringify(baseData));
            return ResultData_1.ResultData.end(200, item, "修改成功");
        }
        else {
            return ResultData_1.ResultData.end(500, {}, "对象id不存在");
        }
    }
    findForPage(pno = 1, psize = 10, tableName, fn) {
        let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/${tableName}.table.json`));
        let baseData;
        if (fn) {
            baseData = fn();
        }
        else {
            baseData = JSON.parse(res.toString()).data;
        }
        let totalElements = baseData.length;
        let hasPageLast = totalElements % psize == 0 ? 0 : 1;
        let pCount = Math.floor(totalElements / psize) + hasPageLast;
        let begin = Number((pno - 1) * psize);
        let end = Number((pno - 1) * psize) + Number(psize);
        let list = baseData.slice(begin, end);
        let page = {
            pno: Number(pno), psize: Number(psize),
            totalElements,
            pCount
        };
        if (list.length > 0) {
            if (pno < 1) {
                return ResultData_1.ResultData.end(500, { list, page }, "页号不能小于1");
            }
            else if (pno > pCount) {
                return ResultData_1.ResultData.end(500, { list, page }, "页号不能超过页数字");
            }
            else {
                return ResultData_1.ResultData.end(200, { list, page }, "查询成功");
            }
        }
        else {
            return ResultData_1.ResultData.end(200, { list, page }, "查询成功");
        }
    }
    deleteById(id, tableName) {
        try {
            let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/${tableName}.table.json`));
            let baseData = JSON.parse(res.toString());
            for (let i = 0; i < baseData.data.length; i++) {
                if (id == baseData.data[i].id) {
                    baseData.data.splice(i, 1);
                }
            }
            fs.writeFileSync(path.resolve(__dirname, `../../src/tables/${tableName}.table.json`), JSON.stringify(baseData));
            return ResultData_1.ResultData.end(200, {}, "删除成功");
        }
        catch (e) {
            return ResultData_1.ResultData.end(500, e.message, "删除失败");
        }
    }
    deleteByIds(ids, tableName) {
        try {
            let res = fs.readFileSync(path.resolve(__dirname, `../../src/tables/${tableName}.table.json`));
            let baseData = JSON.parse(res.toString());
            baseData.data = baseData.data.filter(item => {
                if (ids.indexOf(item.id) == -1) {
                    return true;
                }
                else {
                    return false;
                }
            });
            fs.writeFileSync(path.resolve(__dirname, `../../src/tables/${tableName}.table.json`), JSON.stringify(baseData));
            return ResultData_1.ResultData.end(200, {}, "删除成功");
        }
        catch (e) {
            return ResultData_1.ResultData.end(500, e.message, "删除失败");
        }
    }
    upload(file, body) {
        console.log(file.originalname);
        if (!file) {
            return ResultData_1.ResultData.end(500, {}, '请上传一个文件');
        }
        if (body.folder) {
            try {
                fs.accessSync(path.resolve(__dirname, '../../public/' + body.folder), fs.constants.R_OK | fs.constants.W_OK);
            }
            catch (e) {
                console.log(e);
                fs.mkdirSync(path.resolve(__dirname, '../../public/' + body.folder));
            }
        }
        console.log(file.originalname);
        let houzhui = file.originalname.split('.')[file.originalname.split('.').length - 1];
        let newFileName = Math.random().toString(36).slice(-6) + new Date().getTime();
        let filePath = '/public/' + (body.folder || 'face') + '/' + newFileName + '.' + houzhui;
        try {
            fs.writeFileSync(path.resolve(__dirname, '../..' + filePath), file.buffer);
        }
        catch (e) {
            return ResultData_1.ResultData.end(500, e.message, '上传失败');
        }
        return ResultData_1.ResultData.end(200, { url: filePath, fileName: newFileName + '.' + houzhui }, '上传成功');
    }
    deleteFile(p) {
        try {
            fs.accessSync(path.resolve(__dirname, '../..' + p), fs.constants.R_OK | fs.constants.W_OK);
            fs.unlinkSync(path.resolve(__dirname, '../..' + p));
            return ResultData_1.ResultData.end(200, {}, '删除成功');
        }
        catch (e) {
            return ResultData_1.ResultData.end(500, e.message, '删除失败');
        }
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map