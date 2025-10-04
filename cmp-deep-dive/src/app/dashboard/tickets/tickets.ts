import { Component } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket";

@Component({
  selector: 'app-tickets',
  imports: [NewTicket, TicketComponent],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css'
})
export class Tickets {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open',
    };
    this.tickets.push(ticket);
  }

  // mark as completed functionality
  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
