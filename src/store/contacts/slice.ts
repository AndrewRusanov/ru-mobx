import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ContactDto } from 'src/types/dto/ContactDto'

const BASE_URL =
  'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/280/h/3f9021c6ea91fc0306ceb0e9c2f2e56c.json'

interface InitialState {
  contacts: ContactDto[]
  favorite: ContactDto['id'][]
}
const INITIAL_STATE: InitialState = {
  contacts: [],
  favorite: [],
}

export const contactsApiSlice = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getContacts: builder.query<ContactDto[], void>({
      query() {
        return {
          url: '/',
        }
      },
    }),
  }),
})

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    setContacts(state, action: PayloadAction<ContactDto[]>) {
      state.contacts = action.payload
    },
    setFavoriteContacts(state, action: PayloadAction<ContactDto['id'][]>) {
      state.favorite = action.payload
    },
  },
})
