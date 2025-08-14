import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { useAppSelector } from 'src/store/hooks'
import { ContactDto } from 'src/types/dto/ContactDto'

export const FavoritListPage = memo(() => {
  const { contacts, favorite } = useAppSelector(state => state.contacts)
  const [contactsState, setContactsState] = useState<ContactDto[]>([])

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
