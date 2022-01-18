import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';

const GenresList = observer(() => {
  const { genres } = useStore();
  return (
    <>
      <Row>     
          {genres.genres.map((genre) => 
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
      <Button variant="primary" onClick={()=> genres.addGenre('tit')}>Добавить жанр</Button>
    </>    
  )
})

export default GenresList;