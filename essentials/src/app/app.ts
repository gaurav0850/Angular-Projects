import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users'
import { TasksComponent } from './tasks/tasks';
// import { NgFor } from '@angular/common'; for syntax before angular 17

@Component({
  selector: 'app-root',
  // imports: [HeaderComponent, UserComponent, TasksComponent, NgFor], for syntax before angular 17
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('essentials');
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    console.log('Selected user with id ' + id);
    this.selectedUserId = id;
  }
}
