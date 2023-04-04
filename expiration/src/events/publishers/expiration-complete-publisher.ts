import {Subjects,Publisher,ExpirationCompleteEvent} from '@sgstickets2/common'




export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject:Subjects.ExpirationComplete=Subjects.ExpirationComplete
    // constructor(ticket:Ticket){}
}