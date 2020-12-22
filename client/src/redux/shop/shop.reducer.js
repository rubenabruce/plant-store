import SHOP_DATA from './shop.data';
import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: SHOP_DATA,
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
    default:
      return state;
  }
};

export default shopReducer;
