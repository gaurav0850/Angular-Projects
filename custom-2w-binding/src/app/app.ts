import { Component } from '@angular/core';
import { RectComponent } from './rect/rect';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [RectComponent, FormsModule],
})
export class App {
  rectSize = {
    width: '100',
    height: '100',
  };
}
