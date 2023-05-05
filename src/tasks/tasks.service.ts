import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first tasks',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];

  getTasks() {
    return this.tasks;
  }
  createTasks(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };

    this.tasks.push(task);

    return task;
  }
  updateTasks() {}
  deleteTasks(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
