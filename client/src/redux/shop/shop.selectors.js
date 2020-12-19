import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionItems = createSelector(
  [selectCollections],
  collections => collections[0].items
)

export const selectNavDropdownHidden = createSelector(
  [selectShop],
  shop => shop.navHidden
)

export const selectSideNavHidden = createSelector(
  [selectShop],
  shop => shop.sideNavHidden
)