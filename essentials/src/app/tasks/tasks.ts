import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class TasksComponent {
  // @Input({ required: true}) name!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;
  // private tasksService = new TasksService(); if this service is instantiated in elsewhere, it will have it's own data
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.isAddingTask = false;
  }
}
