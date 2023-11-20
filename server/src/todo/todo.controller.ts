import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
// import { Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  listTodos() {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() body) {
    return this.todoService.create(body);
  }

  @Patch(':id')
  update(@Param('id') param: string, @Body() body) {
    return this.todoService.update(param, body);
  }

  @Delete(':id')
  delete(@Param('id') param: string) {
    return this.todoService.remove(param);
  }
}
