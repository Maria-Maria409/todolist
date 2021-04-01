"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoschema = void 0;
const mongoose = require("mongoose");
exports.todoschema = new mongoose.Schema({
    date_todo: String,
    favorite_todo: String,
    show: Boolean,
    title_todo: String,
    state_todo: String,
});
//# sourceMappingURL=todo.schema.js.map