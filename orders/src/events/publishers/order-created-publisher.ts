import { OrderCreatedEvent, Publisher, Subjects } from "@sgstickets2/common";




export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
    // constructor(eventEmitter: EventEmitter) {
    //     super(eventEmitter);
    //     this.eventEmitter.on(this.subject, this.onOrderCreated.bind(this));
    //     }
    //     onOrderCreated(data: OrderCreatedEvent['data']) {
    //         console.log('Event data!', data);
    //         this.emit(this.subject, data);

    //         }
    
}