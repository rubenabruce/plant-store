import { createSelector } from 'reselect';

const selectCheckout = state => state.checkout;

export const selectCheckoutDetails = createSelector(
  [selectCheckout],
  checkout => checkout.userDetails
);
