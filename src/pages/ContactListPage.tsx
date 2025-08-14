import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { useAppSelector } from 'src/store/hooks'
import { ContactDto } from 'src/types/dto/ContactDto'

export const ContactListPage = memo(() => {
  const { contacts } = useAppSelector(state => state.contacts)
  const { groupContacts } = useAppSelector(state => state.groupContacts)

  const [filteredContacts, setFilteredContacts] =
    useState<ContactDto[]>(contacts)

  useEffect(() => {
    setFilteredContacts(contacts)
  }, [contacts])

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts = contacts

    if (fv.name) {
      const fvName = fv.name.toLowerCase()
      findContacts = findContacts.filter(({ name }) =>
        name.toLowerCase().includes(fvName)
      )
    }

    if (fv.groupId) {
      const newGroupContacts = groupContacts.find(({ id }) => id === fv.groupId)

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
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
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
