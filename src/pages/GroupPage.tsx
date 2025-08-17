import { observer } from 'mobx-react-lite'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { contactsStore, groupContactsStore } from 'src/store'

export const GroupPage = observer(() => {
  const { contacts } = contactsStore
  const { groupContacts } = groupContactsStore
  const { groupId } = useParams<{ groupId: string }>()

  const findGroup = groupContacts?.find(({ id }) => id === groupId)
  const groupContactsList = groupContacts?.find(({ id }) => id === groupId)
  const contactsList = findGroup
    ? contacts?.filter(({ id }) => findGroup.contactIds.includes(id)) || []
    : []

  return (
    <Row className='g-4'>
      {groupContactsList ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className='mx-auto'>
                <GroupContactsCard groupContacts={groupContactsList} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className='g-4'>
              {contactsList.map(contact => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  )
})
