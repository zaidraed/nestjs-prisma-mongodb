import { Injectable, NotFoundException, HttpCode } from '@nestjs/common';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';

@Injectable()
export class tasksService {
  private tasks = [];
  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) {
      return new NotFoundException(`task with id ${id} not found`);
    }

    return taskFound;
  }

  createTask(task: CreateTasksDto) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask(task: UpdateTasksDto) {
    console.log(task);
    return 'update task';
  }

  deleteTask() {
    return 'delete task';
  }

  updateTasksStatus() {
    return 'update tasks status';
  }
}
