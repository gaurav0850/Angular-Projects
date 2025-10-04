import {
  AfterContentInit,
  afterEveryRender,
  afterNextRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class Control implements AfterContentInit{
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }
  label = input.required<string>();

  private el = inject(ElementRef);

  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  //angular 17 or later
  private control = contentChild<ElementRef<
  HTMLInputElement | HTMLTextAreaElement>
  >('input');

  constructor() {
    afterEveryRender(() => {
      // if any component in angular application is changed, then this will execute
      console.log('Control component After render effect');
    });

    afterNextRender(() => {
      console.log('Control component After next render executed');
    });
  }

  ngAfterContentInit(): void {
    
  }

  onClick() {
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control());
  }
}
