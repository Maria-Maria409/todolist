import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [TodoModule,
    MongooseModule.forRoot('mongodb://localhost/todo')
    
  ],
 
 
})

export class AppModule {}
