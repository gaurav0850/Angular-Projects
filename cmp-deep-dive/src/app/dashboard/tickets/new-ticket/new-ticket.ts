import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  ViewChild,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket implements AfterViewInit, OnInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // alternative to above code, available only in latest angular 17 or newer
  // user ViewChildren to select more than one elements
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{ title: string; text: string }>();

  enteredTitle = '';
  enteredText = '';

  ngOnInit() {
    console.log('new ticket on init');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('new ticket After view init');
    console.log(this.form().nativeElement);
  }

  onSubmit() {
    console.log(this.enteredTitle);
    console.log(this.enteredText);
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    // this.form().nativeElement.reset();
    this.enteredText='';
    this.enteredTitle='';
  }
}
