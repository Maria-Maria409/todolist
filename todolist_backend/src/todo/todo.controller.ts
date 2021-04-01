import { Controller , Get, Post,Body, Delete, Res,Put, Param, Query, HttpStatus } from '@nestjs/common';
import { tododto } from './todo.dto';
import {TodoService} from './todo.service'

@Controller('todo')
export class TodoController {
    constructor(private todoservice: TodoService){}


@Get('/all')
public async gettodo(){

  const resultas=this.todoservice.gettodo();
  return resultas;
/*   return res.status(HttpStatus.OK).json( { message: 'Customer has been successfully updated',
  resultas}); */
  

}
@Post('/create')
public async posttodo(@Body() todo:tododto){

   return  this.todoservice.posttodo(todo);
}

@Get('/addbyid')
public async gettodobyid(@Param('id') id:string)
{
    return this.todoservice.gettodobyid(id);
}

 @Delete('/remove')
 public async deletetodobyid(@Query('id') id) {
    //c console.log(id);
    return this.todoservice.deletetodobyid(id);
} 

@Put('/update')
public async puttodobyid( @Query() query)
{ const propertyname=query.property_name;
    const propertyvalue=query.property_value;
    const id=query.id;
    return this.todoservice.puttodobyid(id,propertyname,propertyvalue);
}

}
