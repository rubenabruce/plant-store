import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  navHidden: false,
  sideNavHidden: false,
  notificationHidden: {
    hidden: true
  }
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.TOGGLE_NAV_HIDDEN:
      return {
        ...state,
        navHidden: !state.navHidden
      }
    case shopActionTypes.TOGGLE_SIDE_NAV_HIDDEN:
      return {
        ...state,
        sideNavHidden: !state.sideNavHidden
      }
    case shopActionTypes.CART_NOTIFICATION_HIDDEN:
      return {
        ...state, 
        notificationHidden: {
          hidden: true
        }
      }
    case shopActionTypes.CART_NOTIFICATION_SHOW: 
      return {
        ...state,
        notificationHidden: {
          hidden: false
        }
      }
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;
