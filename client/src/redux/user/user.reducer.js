import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  showAccountDD: false
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.SET_CURRENT_USER: 
      return {
        ...state,
        currentUser: action.payload
      }
    case UserActionTypes.TOGGLE_ACCOUNT_DD:
      return {
        ...state,
        showAccountDD: !state.showAccountDD
      } 
    default:
      return state;
  }
}

export default userReducer;