import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user';
import { TasksComponent } from './tasks/tasks';
import { Card } from './shared/card/card';
import { Task } from './tasks/task/task';
import { NewTask } from './tasks/new-task/new-task';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    UserComponent,
    Card,
    TasksComponent,
    Task,
    NewTask,
  ], //for non standalone components
  bootstrap: [App],
  imports: [BrowserModule, FormsModule], //for standalone components
  //DatePipe imported from BrowserModule
})
export class AppModule {}
