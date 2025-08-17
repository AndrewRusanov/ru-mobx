import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { useGetContacts, useGetGroupContacts } from 'src/hooks'
import { ContactDto } from 'src/types/dto/ContactDto'

export const ContactListPage = observer(() => {
  const contactsList = useGetContacts()
  const groupContactsList = useGetGroupContacts()

  const [filteredContacts, setFilteredContacts] =
    useState<ContactDto[]>(contactsList)

  useEffect(() => {
    setFilteredContacts(contactsList)
  }, [contactsList])

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts = contactsList

    if (fv.name) {
      const fvName = fv.name.toLowerCase()
      findContacts = findContacts.filter(({ name }) =>
        name.toLowerCase().includes(fvName)
      )
    }

    if (fv.groupId) {
      const newGroupContacts = groupContactsList.find(
        ({ id }) => id === fv.groupId
      )

      if (newGroupContacts) {
        findContacts = findContacts.filter(({ id }) =>
          newGroupContacts.contactIds.includes(id)
        )
      }
    }

    setFilteredContacts(findContacts)
  }

  return (
    <Row xxl={1}>
      <Col className='mb-3'>
        <FilterForm
          initialValues={{}}
          onSubmit={onSubmit}
          groupContacts={groupContactsList}
        />
      </Col>
      <Col>
        <Row xxl={4} className='g-4'>
          {filteredContacts.map(contact => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
})
