import React, {useState} from 'react';
import {useStripe, useElements, PaymentElement, CardElement} from '@stripe/react-stripe-js';
import axios from 'axios';
import Router from 'next/router';
const CheckoutForm = ({clientSecret}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!stripe || !elements){
      return;
    }
    try {
      setIsProcessing(true);

      const { error } =await stripe.confirmPayment({
        elements,
        confirmParams:{
          return_url: 'https://ticketing.dev/orders'
        }

      });
  
      if (error) {
        setMessage(error.message);
      }
  
      setIsProcessing(false);
  
  
      
    }
    catch (error) {
        console.log(error)
    }
};

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
   
    <PaymentElement id="payment-element" />
    <button disabled={isProcessing || !stripe || !elements} id="submit">
      <span id="button-text">
        {isProcessing ? "Processing ... " : "Submit"}
      </span>
    </button>
    {/* Show any error or success messages */}
    {message && <div id="payment-message">{message}</div>}
  </form>
  )
};

export {CheckoutForm}