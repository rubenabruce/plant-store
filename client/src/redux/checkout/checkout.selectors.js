import { createSelector } from 'reselect';

const selectCheckout = state => state.checkout;

export const selectCheckoutDetails = createSelector(
  [selectCheckout],
  checkout => checkout.userDetails
);

export const selectDeliveryCost = createSelector(
  [selectCheckout],
  checkout => checkout.deliveryCost
);