"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileType = void 0;
const swagger_1 = require("@nestjs/swagger");
class FileType {
}
__decorate([
    swagger_1.ApiProperty({
        description: '存储到哪个文件夹,默认为face',
        example: 'face',
        required: false
    }),
    __metadata("design:type", String)
], FileType.prototype, "folder", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '存储的文件对象',
        example: 'File',
        required: true
    }),
    __metadata("design:type", String)
], FileType.prototype, "file", void 0);
exports.FileType = FileType;
//# sourceMappingURL=file.entity.js.map