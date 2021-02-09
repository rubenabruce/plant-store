import { AdminActionTypes } from "./admin.types";
import { deleteDataRow, updateDataRow } from './admin.utils';

const INITIAL_STATE = {
  originalData: {},
  updatedData: {}
}

const AdminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AdminActionTypes.UPDATE_DATA: 
      return {
        ...state,
        updatedData: action.payload
      };
    case AdminActionTypes.SET_ORIGINAL_DATA: 
      return {
        ...state,
        originalData: action.payload
      };
    case AdminActionTypes.SET_UPDATE_DATA_ITEM:
      return {
        ...state,
        updatedData: {
          plants: {
            id: "Plants",
            items: updateDataRow(state.updatedData.plants.items, action.payload),
            routeName: "plants",
            title: "Plants"
          }          
        }
      }
    case AdminActionTypes.DELETE_ITEM: 
      return {
        ...state,
        updatedData: {
          plants: {
            id: "Plants",
            items: deleteDataRow(state.updatedData.plants.items, action.payload),
            routeName: "plants",
            title: "Plants"
          }
        }
      }
    default: 
      return state;
  }
};


export default AdminReducer;