import { shopActionTypes } from "./shop.types";

export const toggleNavHidden = () => ({
  type: shopActionTypes.TOGGLE_NAV_HIDDEN
})

export const toggleSideNavHidden = () => ({
  type: shopActionTypes.TOGGLE_SIDE_NAV_HIDDEN
})