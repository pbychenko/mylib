import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';
import cookies from 'js-cookie';

const GenresList = observer(() => {
  const { genres, userStore } = useStore();
  const token = cookies.get('token');
  if (token) {
    userStore.setIsAuth(true);
  }

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
      {userStore.isAuth ? (<Button variant="primary" onClick={()=> genres.addGenre('tit', token)}>Добавить жанр</Button>) : null }
      
    </>    
  )
})

export default GenresList;