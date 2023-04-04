import Queue from 'bull'

import { ExpirationCompletePublisher } from '../events/publishers/expiration-complete-publisher'
import { natsWrapper } from '../nats-wrapper'


interface Payload {
    orderId: string
}

// Then as a second argument, we're going to put in an
// options object, we're going to add in some options object
// to tell the queue that we wanted to connect to the instance of the server
// that we are running over inside  the pod 



const expirationQueue=new Queue<Payload>('order:expiration',{
    redis: {
        host: process.env.REDIS_HOST
    }
})


expirationQueue.process(async (job)=>{
    new ExpirationCompletePublisher(natsWrapper.client).publish({
        orderId: job.data.orderId
    })
})

export {expirationQueue}



