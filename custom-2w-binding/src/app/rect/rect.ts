import { Component, input, output, model } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.html',
  styleUrl: './rect.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  // size = input.required<{
  //   width: string;
  //   height: string;
  // }>();

  // // name should be same as below
  // sizeChange = output<{
  //   width: string;
  //   height: string;
  // }>();

  // Alternative for 2 way binding: easier way in angular 17.2+
  size = model.required<{
    width: string;
    height: string;
  }>();

  onReset() {
    // this.sizeChange.emit({
    //   width: '200',
    //   height: '100',
    // });

    this.size.set({
      width: '200',
      height: '100',
    })
  }
}
