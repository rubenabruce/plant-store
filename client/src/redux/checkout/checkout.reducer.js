import { CheckoutActionTypes } from './checkout.types';

const INITIAL_STATE = {
  deliveryCost: ''
}

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CheckoutActionTypes.ADD_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload
      }
    case CheckoutActionTypes.ADD_DELIVERY_COST:
      return {
        ...state, 
        deliveryCost: action.payload
      }
    default: {
      return state
    }
  }
}

export default checkoutReducer