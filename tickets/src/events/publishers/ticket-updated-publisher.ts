import {Publisher,Subjects,TicketUpdatedEvent} from "@sgstickets2/common"


export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject:Subjects.TicketUpdated=Subjects.TicketUpdated
    // constructor(ticket:Ticket){}
}