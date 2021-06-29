import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const {
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsError,
  addItemRequest,
  addItemSuccess,
  addItemError,
  deleteItemRequest,
  deleteItemSuccess,
  deleteItemError,
  changeFilter,
} = actions;

const itemsReducer = createReducer([], {
  [fetchItemsSuccess]: (_, { payload }) => payload,
  [addItemSuccess]: (state, { payload }) => [...state, payload],
  [deleteItemSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [fetchItemsRequest]: () => true,
  [fetchItemsSuccess]: () => false,
  [fetchItemsError]: () => false,
  [addItemRequest]: () => true,
  [addItemSuccess]: () => false,
  [addItemError]: () => false,
  [deleteItemRequest]: () => true,
  [deleteItemSuccess]: () => false,
  [deleteItemError]: () => false,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export default contactsReducer;
