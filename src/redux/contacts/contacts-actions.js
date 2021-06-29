import { createAction } from '@reduxjs/toolkit';

const fetchItemsRequest = createAction('contacts/fetchItemsRequest');
const fetchItemsSuccess = createAction('contacts/fetchItemsSuccess');
const fetchItemsError = createAction('contacts/fetchItemsError');

const addItemRequest = createAction('contacts/addItemRequest');
const addItemSuccess = createAction('contacts/addItemSuccess');
const addItemError = createAction('contacts/addItemError');

const deleteItemRequest = createAction('contacts/deleteItemRequest');
const deleteItemSuccess = createAction('contacts/deleteItemSuccess');
const deleteItemError = createAction('contacts/deleteItemError');

const changeFilter = createAction('contacts/changeFilter');

export default {
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
};
