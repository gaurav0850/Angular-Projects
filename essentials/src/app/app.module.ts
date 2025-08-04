import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, HeaderComponent, UserComponent], //for non standalone components
  bootstrap: [App],
  imports: [BrowserModule, SharedModule, TasksModule], //for standalone components
  //DatePipe imported from BrowserModule
})
export class AppModule {}
