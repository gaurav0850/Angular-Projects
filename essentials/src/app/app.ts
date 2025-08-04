import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users'
// import { NgFor } from '@angular/common'; for syntax before angular 17

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [HeaderComponent, UserComponent, TasksComponent, NgFor], for syntax before angular 17
  // imports: [HeaderComponent, UserComponent, TasksComponent], error due to standalone false
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
