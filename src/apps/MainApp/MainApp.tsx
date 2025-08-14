import { useEffect } from 'react'
import { ThemeProvider } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'src/components/Layout'
import {
  ContactListPage,
  ContactPage,
  FavoritListPage,
  GroupListPage,
  GroupPage,
} from 'src/pages'
import {
  setContacts,
  setFavoriteContacts,
  useGetContactsQuery,
} from 'src/store/contacts'
import {
  setGroupContacts,
  useGetGroupContactsQuery,
} from 'src/store/groupContacts'
import { useAppDispatch } from 'src/store/hooks'
import './MainApp.scss'

export const MainApp = () => {
  const contactsData = useGetContactsQuery()
  const groupContactsData = useGetGroupContactsQuery()
  const dispatch = useAppDispatch()
  const contacts = contactsData.data ?? []
  const favoriteContacts = contacts.map(contact => contact.id).slice(0, 4)
  const groupContacts = groupContactsData.data ?? []

  useEffect(() => {
    dispatch(setContacts(contacts))
    dispatch(setFavoriteContacts(favoriteContacts))
    dispatch(setGroupContacts(groupContacts))
  }, [contactsData, groupContactsData])

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint='xxs'
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ContactListPage />} />
            <Route path='contact'>
              <Route index element={<ContactListPage />} />
              <Route path=':contactId' element={<ContactPage />} />
            </Route>
            <Route path='groups'>
              <Route index element={<GroupListPage />} />
              <Route path=':groupId' element={<GroupPage />} />
            </Route>
            <Route path='favorit' element={<FavoritListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
