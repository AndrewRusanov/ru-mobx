import { groupContactsApiSlice, groupContactsSlice } from './slice'

export const groupContactsApiReducer = groupContactsApiSlice.reducer
export const groupContactsApiReducerPath = groupContactsApiSlice.reducerPath
export const groupContactsApiMiddleware = groupContactsApiSlice.middleware

export const { useGetGroupContactsQuery } = groupContactsApiSlice

export const groupContactsReducer = groupContactsSlice.reducer
export const { setGroupContacts } = groupContactsSlice.actions
