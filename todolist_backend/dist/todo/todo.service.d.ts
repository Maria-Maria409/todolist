import { Model } from 'mongoose';
import { itodo } from './todo.interface';
import { tododto } from './todo.dto';
export declare class TodoService {
    private readonly todomodel;
    constructor(todomodel: Model<itodo>);
    gettodo(): Promise<tododto[]>;
    posttodo(newtodo: tododto): Promise<itodo>;
    gettodobyid(id: string): Promise<tododto>;
    deletetodobyid(id: any): Promise<any>;
    puttodobyid(id: string, property_name: string, property_value: string): Promise<tododto>;
}
