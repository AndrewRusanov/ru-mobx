import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

const CONTACTS_URL =
  'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/280/h/3f9021c6ea91fc0306ceb0e9c2f2e56c.json'
const GROUP_CONTACTS_URL =
  'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/398/h/e6c614d4c59fd9b546fb5abdfb456dd5.json'

export const api = {
  getContacts: async (): Promise<ContactDto[]> => {
    const response = await fetch(CONTACTS_URL, { method: 'GET' })
    return response.json()
  },
  getGropContacts: async (): Promise<GroupContactsDto[]> => {
    const response = await fetch(GROUP_CONTACTS_URL, { method: 'GET' })
    return response.json()
  },
}
