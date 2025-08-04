import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user';
import { TasksComponent } from './tasks/tasks';

@NgModule({
  declarations: [App], //for non standalone components
  bootstrap: [App],
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent], //for standalone components
})
export class AppModule {}
