import SHOP_DATA from './shop.data';
import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: SHOP_DATA,
  navHidden: false
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.TOGGLE_NAV_HIDDEN:
      return {
        ...state,
        navHidden: !state.navHidden
      }
    default:
      return state;
  }
};

export default shopReducer;
