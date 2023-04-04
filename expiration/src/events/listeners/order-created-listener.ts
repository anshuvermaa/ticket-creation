import { Message } from "node-nats-streaming";
import { Listener, OrderCreatedEvent } from "@sgstickets2/common";
import { Subjects } from "@sgstickets2/common/build/events/subjects";
import { queueGroupName } from "./queue-group-name";
import { expirationQueue } from "../../queues/expiration-queue";


export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
     subject: Subjects.OrderCreated=Subjects.OrderCreated;
        queueGroupName=queueGroupName;

// to add delay just add delay as second argument


 async  onMessage(data: OrderCreatedEvent['data'], msg: Message) {
     const delay=new Date(data.expiresAt).getTime() - new Date().getTime();
    // this will give time in millisecond
    console.log('waiting this many milliseconds to process the job',delay);
        await expirationQueue.add({
            orderId: data.id
        },
        {

            delay,
        }
        )
        msg.ack();
    }
}