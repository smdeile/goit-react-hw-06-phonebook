import { createReducer, nanoid, createStore } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './phonebookActions';
const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: 'a',
};
export const addContactToContacts = createReducer(initialState.contacts, {
  [addContact]: (state, action) => {
    const { name, number } = action.payload.currentTarget;
    action.payload.preventDefault();
    const nameContact = name.value;
    const numberContact = number.value;
    const NewContact = {
      name: nameContact,
      number: numberContact,
      id: nanoid(),
    };
    return [...state, NewContact];
  },
});
export const filterContacts = createReducer(initialState.filter, {
  [filterContact]: (state, action) => {
    const letter = action.payload.value;
    state = `${state}${letter}`;
    console.log(state);
    return state;
  },
});

export const deleteFromContact = createReducer(
  {},
  {
    [deleteContact]: (state, action) => {
      console.log(state);
      console.log(action.payload.currentTarget);
    },
  },
);
