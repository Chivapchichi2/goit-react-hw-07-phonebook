import { createAction } from '@reduxjs/toolkit';
import { v4 as uid } from 'uuid';

const addContact = createAction('contacts/addItem', ({ name, number }) => ({
  payload: {
    id: uid(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/deleteItem');

const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };
