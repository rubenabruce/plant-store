import SHOP_DATA from './shop.data';
import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: SHOP_DATA,
  navHidden: false,
  sideNavHidden: false,
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
    default:
      return state;
  }
};

export default shopReducer;
