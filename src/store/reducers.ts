import { combineReducers } from '@reduxjs/toolkit';
import { ModalAction, ModalActionTypes } from './actions';

const initialState = {
  modal: false,
};

function modalReducer(state = initialState, action: ModalAction) {
  switch (action.type) {
    case ModalActionTypes.ShowModal:
      return {
        ...state,
        modal: true,
      };
    case ModalActionTypes.HideModal:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ modal: modalReducer });
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
