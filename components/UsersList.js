import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';

const GenresList = observer(() => {
  const { userStore } = useStore();
  return (
    <>
      <Row>     
          {userStore.users.map((user) => 
            (<Col key={user.id} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Body> 
                <Card.Title>{user.full_name}</Card.Title>
                <Card.Title>{user.email}</Card.Title>            
                </Card.Body>
              </Card>
            </Col>
          )
          )}          
      </Row>
    </>    
  )
})

export default GenresList;