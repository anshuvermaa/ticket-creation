// export const stripe = require('stripe')('sk_test_51MLqjgSDrIDpfOUjgLgE9LTAA3USNmHRmeBfNkYgmnyeDRySC4QsmJPg1ma8emtcleWniUKJYQCxIg11WrNifSWK00u2z3rbTa');

// `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token



// import Stripe from 'stripe'

// export const stripe =new Stripe("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",{
//     apiVersion: '2022-11-15',
//   });




const Stripe = require('stripe');
const stripe = Stripe('sk_test_51MLqjgSDrIDpfOUjgLgE9LTAA3USNmHRmeBfNkYgmnyeDRySC4QsmJPg1ma8emtcleWniUKJYQCxIg11WrNifSWK00u2z3rbTa');
export {stripe}