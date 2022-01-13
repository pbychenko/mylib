import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';
const GenresList = ({genres}) => { //observer(({genres}) => {
  // const { genres } = useStore();
  // console.log('test2', genres)
  return (
    <Row>     
        {genres.map((genre) => 
          (<Col key={genre.id} md={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Body> 
              <Card.Title>{genre.title}</Card.Title>              
              </Card.Body>
            </Card>
          </Col>
        )
        )}
    </Row>
  )
}

export default GenresList;