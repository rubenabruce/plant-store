import { shopActionTypes } from "./shop.types";

export const toggleNavHidden = () => ({
  type: shopActionTypes.TOGGLE_NAV_HIDDEN
})

export const toggleSideNavHidden = () => ({
  type: shopActionTypes.TOGGLE_SIDE_NAV_HIDDEN
})

export const cartNotificationHidden = () => ({
  type: shopActionTypes.CART_NOTIFICATION_HIDDEN
})

export const cartNotificationShow = () => ({
  type: shopActionTypes.CART_NOTIFICATION_SHOW
})

export const updateCollections = (collectionsMap) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
})