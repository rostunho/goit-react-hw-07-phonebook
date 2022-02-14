import { createAction } from '@reduxjs/toolkit';

export const addNewContactAction = createAction('contacts/addNewContact');
export const removeContactAction = createAction('contacts/removeContact');
export const filterAction = createAction('contacts/filter');
