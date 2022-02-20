import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsApi } from './contacts/contactsSlice';
// import { contactsReducer } from './contacts/contacts-reduser';
import { filterReducer } from './contacts/contacts-reduser';

// const middleware = getDefaultMiddleware => [
//   ...getDefaultMiddleware(),
//   contactsApi.middleware,
// ];

// console.log(contactsApi);

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

// console.dir(store);

setupListeners(store.dispatch);

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';
// import { filterReducer } from './contacts/contacts-reduser';
// import { contactsApi } from './contacts/contactsSlice';

// console.log(contactsApi);

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   contactsApi.middleware,
// ];

// // const persistConfig = {
// //   key: 'contacts',
// //   storage,
// //   blacklist: ['filter'],
// // };

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: {
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     filter: filterReducer,
//   },
//   middleware,
// });

// setupListeners(store.dispatch);

// // export const persistor = persistStore(store);
