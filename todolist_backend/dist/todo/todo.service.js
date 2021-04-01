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
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let TodoService = class TodoService {
    constructor(todomodel) {
        this.todomodel = todomodel;
    }
    async gettodo() {
        const todos = await this.todomodel.find().exec();
        if (!todos || !todos[0]) {
            throw new common_1.HttpException('Not Found', 404);
        }
        return todos;
    }
    async posttodo(newtodo) {
        const todo = new this.todomodel(newtodo);
        return todo.save();
    }
    async gettodobyid(id) {
        const todo = await this.todomodel.findOne({ id }).exec();
        if (!todo) {
            throw new common_1.HttpException('Not Found', 404);
        }
        return todo;
    }
    async deletetodobyid(id) {
        const todo = await this.todomodel.findByIdAndRemove(id).exec();
        return todo;
    }
    async puttodobyid(id, property_name, property_value) {
        const todo = await this.todomodel.findByIdAndUpdate((id), { [property_name]: property_value,
        })
            .exec();
        if (!todo) {
            throw new common_1.HttpException('Not Found', 404);
        }
        return todo;
    }
};
TodoService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('todo')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map