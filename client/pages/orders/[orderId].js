import { useEffect, useState } from 'react';
import { CheckoutForm } from '../../components/CheckoutForm';
import axios from 'axios';

import useRequest from '../../hooks/use-request';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51MLqjgSDrIDpfOUj5nXuesb4LyhGOzsBEZwkGhAEJO1gKVFQ1rMdym1kYKbd9yni7kOdZmzcMXmbHAXVwIAy1ttM00MUgwND0W")


const OrderShow = ({ order, currentUser }) => {


  
  
  const [timeLeft, setTimeLeft] = useState(0);
  const [clientSecret, setClientSecret] = useState("");
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    
    onSuccess: async ({client_secret}) =>{ 
      setClientSecret(client_secret)
      
      
      
    },
  });


  
  
  
  
  
  
  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return <div>Order Expired</div>;
  }
 

  return (
   <div>


 
      Time left to pay: {timeLeft} seconds
     {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
      {/* <CardElement />
      <StripeCheckout
        token={({ id }) => doRequest({ token: id })}
        stripeKey="pk_test_JMdyKVvf8EGTB0Fl28GsN7YY"
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />

      

      <button onClick={()=>doRequest()}> Pay</button> */}
      <div>
        <button onClick={()=>doRequest()}> Pay</button>
      </div>
      {errors}
  
   </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
