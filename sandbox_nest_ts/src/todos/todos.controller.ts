import { Controller } from '@nestjs/common';
import { TodosService } from './todo.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
}
