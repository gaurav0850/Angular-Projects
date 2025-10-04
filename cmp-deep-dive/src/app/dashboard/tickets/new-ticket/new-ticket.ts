import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../shared/button/button";
import { Control } from "../../../shared/control/control";

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css'
})
export class NewTicket {
  onSubmit() {
    console.log('submitted');
    
  }
}
