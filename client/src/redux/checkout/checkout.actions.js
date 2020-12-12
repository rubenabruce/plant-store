import { CheckoutActionTypes } from './checkout.types';

export const addUserDetails = details => ({
  type: CheckoutActionTypes.ADD_USER_DETAILS,
  payload: details
});
