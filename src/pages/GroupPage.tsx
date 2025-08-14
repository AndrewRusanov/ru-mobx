import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { setContacts } from 'src/store/contacts'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const GroupPage = memo(() => {
  const { contacts } = useAppSelector(state => state.contacts)
  const { groupContacts } = useAppSelector(state => state.groupContacts)
  const dispatch = useAppDispatch()
  const { groupId } = useParams<{ groupId: string }>()

  const [groupContactsState, setGroupContactsState] =
    useState<GroupContactsDto>()

  useEffect(() => {
    const findGroup = groupContacts.find(({ id }) => id === groupId)
    const newContacts = () => {
      if (findGroup) {
        return contacts.filter(({ id }) => findGroup.contactIds.includes(id))
      }
      return []
    }

    setGroupContactsState(findGroup)
    dispatch(setContacts(newContacts()))
  }, [groupId])

  return (
    <Row className='g-4'>
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className='mx-auto'>
                <GroupContactsCard groupContacts={groupContactsState!} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className='g-4'>
              {contacts.map(contact => (
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
