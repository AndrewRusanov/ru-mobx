import { observer } from 'mobx-react-lite'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { groupContactsStore } from 'src/store'

export const GroupListPage = observer(() => {
  const { groupContacts } = groupContactsStore

  console.log('####:', groupContacts)

  return (
    <Row xxl={4}>
      {groupContacts.map(groupContact => (
        <Col key={groupContact.id}>
          <GroupContactsCard groupContacts={groupContact} withLink />
        </Col>
      ))}
    </Row>
  )
})
