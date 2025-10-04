import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
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

  ngOnInit() {
    console.log('new ticket on init');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('new ticket After view init');
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
    this.form().nativeElement.reset();
  }
}
