import axios from 'axios';
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
} = actions;

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
  dispatch(fetchItemsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchItemsSuccess(data)))
    .catch(error => dispatch(fetchItemsError(error)));
};

const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = { name, number };
    dispatch(addItemRequest());
    axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(addItemSuccess(data)))
      .catch(error => dispatch(addItemError(error)));
  };

const deleteContact = id => dispatch => {
  dispatch(deleteItemRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteItemSuccess(id)))
    .catch(error => dispatch(deleteItemError(error)));
};

export default { fetchContacts, addContact, deleteContact };
