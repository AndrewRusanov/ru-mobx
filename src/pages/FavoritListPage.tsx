import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { contactsStore } from 'src/store'
import { ContactDto } from 'src/types/dto/ContactDto'

export const FavoritListPage = observer(() => {
  const { contacts, favorite } = contactsStore
  const [contactsState, setContactsState] = useState<ContactDto[]>([])

  console.log('####:', favorite, contacts)

  useEffect(() => {
    setContactsState(() => contacts.filter(({ id }) => favorite.includes(id)))
  }, [contacts, favorite])

  return (
    <Row xxl={4} className='g-4'>
      {contactsState.map(contact => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  )
})
