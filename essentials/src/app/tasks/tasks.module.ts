import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { SharedModule } from '../shared/shared.module';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, Task, NewTask],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
