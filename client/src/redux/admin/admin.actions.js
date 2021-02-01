import { AdminActionTypes } from './admin.types';

export const setOriginalData = data => ({
  type: AdminActionTypes.SET_ORIGINAL_DATA,
  payload: data
})

export const setUpdateData = data => ({
  type: AdminActionTypes.UPDATE_DATA,
  payload: data
});

export const setUpdateDataItem = row => ({
  type: AdminActionTypes.SET_UPDATE_DATA_ITEM,
  payload: row
})