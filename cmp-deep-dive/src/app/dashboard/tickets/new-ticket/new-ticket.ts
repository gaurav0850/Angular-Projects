import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button";
import { Control } from "../../../shared/control/control";

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, Control],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css'
})
export class NewTicket {

}
