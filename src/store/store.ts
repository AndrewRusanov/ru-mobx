import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  contactsApiMiddleware,
  contactsApiReducer,
  contactsApiReducerPath,
  contactsReducer,
} from './contacts'
import {
  groupContactsApiMiddleware,
  groupContactsApiReducer,
  groupContactsApiReducerPath,
  groupContactsReducer,
} from './groupContacts'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groupContacts: groupContactsReducer,
  [contactsApiReducerPath]: contactsApiReducer,
  [groupContactsApiReducerPath]: groupContactsApiReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([
      contactsApiMiddleware,
      groupContactsApiMiddleware,
    ])
  },
})

export type RootState = ReturnType<typeof rootReducer>
