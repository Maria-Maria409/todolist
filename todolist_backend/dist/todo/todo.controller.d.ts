import { tododto } from './todo.dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private todoservice;
    constructor(todoservice: TodoService);
    gettodo(): Promise<tododto[]>;
    posttodo(todo: tododto): Promise<import("./todo.interface").itodo>;
    gettodobyid(id: string): Promise<tododto>;
    deletetodobyid(id: any): Promise<any>;
    puttodobyid(query: any): Promise<tododto>;
}
