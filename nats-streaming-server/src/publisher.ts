import nats from 'node-nats-streaming'
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

const stan=nats.connect('ticketing','abc',{
    url:'http://localhost:4222'
});

// after client successfully connects to the nats streaming server
// server is going to emit a connect event
// so we listen for connect events 



// call back will be executed after successful connect

stan.on('connect',async ()=>{
    console.log('Publisher connected to NATS');

    const publisher=new TicketCreatedPublisher(stan); 
    try {
        await publisher.publish({
             id:'123',
             title:'concert',
             price:20,
         })
        
    } catch (err) {
        console.error(err);
        
    }




    // const data=JSON.stringify({
    //     id:'123',
    //     title:'concert',
    //     price:20
    // })

    // stan.publish('ticket:created',data,()=>{
    //     console.log('Event published');
    // })
     
})

// because nats streaming server is not available on localhost 4222
// our nats streaming server is running on inside our kubernetes cluster
// and we dont have access anything running inside 


