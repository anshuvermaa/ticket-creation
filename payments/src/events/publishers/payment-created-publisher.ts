import { PaymentCreatedEvent, Publisher, Subjects } from "@sgstickets2/common";



export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
    

}