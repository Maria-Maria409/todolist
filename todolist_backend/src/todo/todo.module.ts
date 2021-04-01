import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './todo.controller';
import { todoschema } from './todo.schema';
import { TodoService } from './todo.service';

@Module({
  imports : [
    MongooseModule.forFeature([{
      name:'todo',
      schema :todoschema,


    }]
)
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
