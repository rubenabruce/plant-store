import { CheckoutActionTypes } from './checkout.types';

const INITIAL_STATE = {
  userDetails: {
    email: '',
    fullname: '',
    postcode: '',
    street: '',
    number: '',
    addNotes: ''
  }
}

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CheckoutActionTypes.ADD_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload
      }
    default:
      return state;
  }
}

export default checkoutReducer