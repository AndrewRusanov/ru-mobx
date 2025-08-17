import { makeAutoObservable } from 'mobx'
import { api } from 'src/api/api'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export interface GroupContactsStore {
  groupContacts: GroupContactsDto[]
  setGroupContacts: () => void
}

export const groupContactsStore = makeAutoObservable<GroupContactsStore>({
  groupContacts: [],

  *setGroupContacts() {
    const data: GroupContactsDto[] = yield api.getGropContacts()
    this.groupContacts = data
  },
})
