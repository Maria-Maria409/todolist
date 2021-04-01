import { HttpException, Injectable  } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { itodo } from './todo.interface';
import {tododto} from './todo.dto';
@Injectable()
export class TodoService {


    constructor(@InjectModel('todo') private readonly todomodel: Model <itodo>){}

    public async gettodo():Promise<tododto[]> {
    const todos= await this.todomodel.find().exec();
    if(!todos || !todos[0])
    {
        throw new HttpException('Not Found',404);
    
    }
        return todos;
    }
    
    public async posttodo(newtodo:tododto){
   // console.log("ici ca marche");
        const todo= new this.todomodel(newtodo);
        return todo.save();
    }
    
     public async gettodobyid(id:string): Promise<tododto>{
        const todo= await this.todomodel.findOne({ id }).exec();
        if(!todo)
        {
            throw new HttpException('Not Found',404);
        
        }
            return todo;
    
    } 

  

    public async deletetodobyid(id): Promise<any>{
              const todo= await this.todomodel.findByIdAndRemove( id ).exec();
       
            return todo; }
    
            public  async puttodobyid(id:string,property_name:string,property_value:string):Promise<tododto>{
                const todo= await this.todomodel.findByIdAndUpdate(
            ( id ),
             {[property_name]:property_value,
            },
            )
            .exec();
        if(!todo)
        {
            throw new HttpException('Not Found',404);
        
        }
            return todo;}
    
    
     
           
}
