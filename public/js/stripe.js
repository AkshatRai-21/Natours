/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
import Stripe from 'stripe';


// const stripe = await loadStripe(process.env.STRIPE_PK)
const stripe = new Stripe(
  'pk_test_51MywrFSJZpmRPYEJb5JCyGkjFB1aXn2arckVyMYG7ImF8aJHaTmcDzEV8iVlHJ1LFQoKE3o6T1KmywWp1s0NVpLR009QbtXt1p'
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + chanre credit card
    await Stripe.redirectToCheckout({
      sessionId: DataTransfer.sessionId
     });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
