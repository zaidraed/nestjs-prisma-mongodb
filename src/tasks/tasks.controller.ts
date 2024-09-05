import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { tasksService } from './tasks.service';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: tasksService) {}
  @Get()
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }
  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  createTask(@Body() task: CreateTasksDto) {
    return this.tasksService.createTask(task);
  }
  @Put()
  updateTask(@Body() task: UpdateTasksDto) {
    return this.tasksService.updateTask(task);
  }
  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }
  @Patch()
  updateTasksStatus() {
    return this.tasksService.updateTasksStatus();
  }
}
