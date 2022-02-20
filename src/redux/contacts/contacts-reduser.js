import { createReducer } from '@reduxjs/toolkit';
import { filterAction } from './contacts-actions';
// import { contactsApi } from './contactsSlice';
// import defaultContacts from '../../database/default-contacts.json';

// const itemsReducer = createReducer(defaultContacts, {
//   [addNewContactAction]: (state, { payload }) => [payload, ...state],
//   [removeContactAction]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

export const filterReducer = createReducer('', {
  [filterAction]: (_, { payload }) => payload,
});

// export const contactsReducer = combineReducers({
//   [contactsApi.reducerPath]: contactsApi.reducer,
//   filter: filterReducer,
// });
