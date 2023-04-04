import { OrderCancelledEvent, Publisher, Subjects } from "@sgstickets2/common";




export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}