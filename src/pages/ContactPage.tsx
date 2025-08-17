import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { contactsStore } from 'src/store'
import { ContactDto } from 'src/types/dto/ContactDto'

export const ContactPage = observer(() => {
  const { contacts } = contactsStore

  const { contactId } = useParams<{ contactId: string }>()
  const [contact, setContact] = useState<ContactDto>()

  useEffect(() => {
    setContact(() => contacts.find(({ id }) => id === contactId))
  }, [contactId])

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  )
})
