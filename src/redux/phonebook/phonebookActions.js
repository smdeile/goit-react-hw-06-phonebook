import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('add/contact');
export const deleteContact = createAction('delete/contact');
export const filterContact = createAction('filter/contact');
