import { makeAutoObservable } from 'mobx'
import { api } from 'src/api/api'
import { ContactDto } from 'src/types/dto/ContactDto'

export interface ContactsStore {
  contacts: ContactDto[]
  favorite: ContactDto['id'][]
  setContacts: () => void
}

export const contactsStore = makeAutoObservable<ContactsStore>({
  contacts: [],
  favorite: [],
  *setContacts() {
    const data: ContactDto[] = yield api.getContacts()
    this.contacts = data
    this.favorite = data.slice(0, 4).map(contact => contact.id)
  },
})
