import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections ? shop.collections : null
)

export const selectCollectionItems = createSelector(
  [selectCollections],
  collections => collections.plants.items ? collections.plants.items : []
)

export const selectCollectionItemById = itemId => 
  createSelector(
    [selectCollectionItems],
    items => items.find(item => item.id === parseInt(itemId))
)

export const selectNavDropdownHidden = createSelector(
  [selectShop],
  shop => shop.navHidden
)

export const selectSideNavHidden = createSelector(
  [selectShop],
  shop => shop.sideNavHidden
)

export const selectNotificationHidden = createSelector(
  [selectShop],
  shop => shop.notificationHidden
)