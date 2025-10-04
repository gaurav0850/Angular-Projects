import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
    this.form?.nativeElement.reset();
  }
}
