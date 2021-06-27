import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = { name, number };
    dispatch({ type: 'contacts/addItemRequest' });
    axios
      .post('/contacts', contact)
      .then(({ data }) =>
        dispatch({ type: 'contacts/addItemSuccess', payload: data }),
      )
      .catch(error =>
        dispatch({ type: 'contacts/addItemError', payload: error }),
      );
  };
// const addContact = createAction('contacts/addItem', ({ name, number }) => ({
//   payload: {
//     id: uid(),
//     name,
//     number,
//   },
// }));

const deleteContact = createAction('contacts/deleteItem');

const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };
