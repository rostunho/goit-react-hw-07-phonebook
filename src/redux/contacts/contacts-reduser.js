import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  addNewContactAction,
  removeContactAction,
  filterAction,
} from './contacts-actions';
import defaultContacts from '../../database/default-contacts.json';

const itemsReducer = createReducer(defaultContacts, {
  [addNewContactAction]: (state, { payload }) => [payload, ...state],
  [removeContactAction]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [filterAction]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
