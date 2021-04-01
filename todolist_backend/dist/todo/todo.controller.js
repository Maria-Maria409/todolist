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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_dto_1 = require("./todo.dto");
const todo_service_1 = require("./todo.service");
let TodoController = class TodoController {
    constructor(todoservice) {
        this.todoservice = todoservice;
    }
    async gettodo() {
        const resultas = this.todoservice.gettodo();
        return resultas;
    }
    async posttodo(todo) {
        return this.todoservice.posttodo(todo);
    }
    async gettodobyid(id) {
        return this.todoservice.gettodobyid(id);
    }
    async deletetodobyid(id) {
        return this.todoservice.deletetodobyid(id);
    }
    async puttodobyid(query) {
        const propertyname = query.property_name;
        const propertyvalue = query.property_value;
        const id = query.id;
        return this.todoservice.puttodobyid(id, propertyname, propertyvalue);
    }
};
__decorate([
    common_1.Get('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "gettodo", null);
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.tododto]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "posttodo", null);
__decorate([
    common_1.Get('/addbyid'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "gettodobyid", null);
__decorate([
    common_1.Delete('/remove'),
    __param(0, common_1.Query('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "deletetodobyid", null);
__decorate([
    common_1.Put('/update'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "puttodobyid", null);
TodoController = __decorate([
    common_1.Controller('todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map