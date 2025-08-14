import { contactsApiSlice, contactsSlice } from './slice'

export const contactsApiReducer = contactsApiSlice.reducer
export const contactsApiReducerPath = contactsApiSlice.reducerPath
export const contactsApiMiddleware = contactsApiSlice.middleware

export const { useGetContactsQuery } = contactsApiSlice

export const contactsReducer = contactsSlice.reducer
export const { setContacts, setFavoriteContacts } = contactsSlice.actions
