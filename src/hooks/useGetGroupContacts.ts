import { useEffect } from 'react'
import { groupContactsStore } from 'src/store'

export function useGetGroupContacts() {
  const { groupContacts } = groupContactsStore
  useEffect(() => {
    if (!groupContacts.length) {
      groupContactsStore.setGroupContacts()
    }
  }, [groupContacts])

  return groupContacts
}
