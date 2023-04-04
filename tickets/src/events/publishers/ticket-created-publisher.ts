import {Publisher,Subjects,TicketCreatedEvent} from "@sgstickets2/common"


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject:Subjects.TicketCreated=Subjects.TicketCreated
    // constructor(ticket:Ticket){}
}