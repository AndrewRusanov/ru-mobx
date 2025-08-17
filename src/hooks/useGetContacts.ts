import { useEffect } from 'react'
import { contactsStore } from 'src/store'

export function useGetContacts() {
  const { contacts } = contactsStore
  useEffect(() => {
    if (!contacts.length) {
      contactsStore.setContacts()
    }
  }, [contacts])

  return contacts
}
