import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://620a06cf92946600171c56d7.mockapi.io',
  }),

  tagTypes: ['Contact'],

  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/items',
      providesTags: ['Contact'],
    }),

    removeContact: builder.mutation({
      query: id => ({
        url: `/items/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),

    addNewContact: builder.mutation({
      query: newContact => ({
        url: '/items',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddNewContactMutation,
  useRemoveContactMutation,
} = contactsApi;
