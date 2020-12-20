import { CheckoutActionTypes } from './checkout.types';

export const addUserDetails = details => ({
  type: CheckoutActionTypes.ADD_USER_DETAILS,
  payload: details
});

export const addDeliveryCost = cost => ({
  type: CheckoutActionTypes.ADD_DELIVERY_COST,
  payload: cost
});