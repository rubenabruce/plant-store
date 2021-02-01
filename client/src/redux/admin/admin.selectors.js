import { createSelector } from 'reselect';

const selectAdmin = state => state.admin;

export const selectOriginalData = createSelector(
  [selectAdmin],
  admin => admin.originalData
);

export const selectUpdatedData = createSelector(
  [selectAdmin],
  admin => admin.updatedData
);

export const selectUpdatedItemById = itemId =>
  createSelector(
    [selectUpdatedData],
    updatedData => updatedData.plants.items.find(item => item.id === itemId)
)