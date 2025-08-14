import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

const BASE_URL =
  'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/398/h/e6c614d4c59fd9b546fb5abdfb456dd5.json'

interface InitialState {
  groupContacts: GroupContactsDto[]
}

const INITIAL_STATE: InitialState = {
  groupContacts: [],
}

export const groupContactsApiSlice = createApi({
  reducerPath: 'groupContactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getGroupContacts: builder.query<GroupContactsDto[], void>({
      query() {
        return {
          url: '/',
        }
      },
    }),
  }),
})

export const groupContactsSlice = createSlice({
  name: 'groupContacts',
  initialState: INITIAL_STATE,
  reducers: {
    setGroupContacts(state, action: PayloadAction<GroupContactsDto[]>) {
      state.groupContacts = action.payload
    },
  },
})
