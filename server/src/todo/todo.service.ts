import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll() {
    return await this.todoRepository.find();
  }

  create(createTodoDto: CreateTodoDto) {
    const todo = this.todoRepository.create(createTodoDto);
    return this.todoRepository.save(todo);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoRepository.preload({
      id: +id,
      ...updateTodoDto,
    });

    if (!todo) {
      throw new NotFoundException(`Coffee #${id} is not found`);
    }

    return this.todoRepository.save(todo);
  }

  async remove(id: string) {
    const todo = await this.todoRepository.find({
      where: { id: +id },
    });
    return this.todoRepository.remove(todo);
  }
}
