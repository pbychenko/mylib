import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';

const AuthorsList = observer(() => { //observer(({genres}) => {
  const { authors } = useStore();
  // console.log(authors.authors);
  return (
    <>
      <Row>     
          {authors.authors.map((author) => 
            (<Col key={author.id} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Body> 
                <Card.Title>{author.name}</Card.Title>
                <Card.Title>{author.last_name}</Card.Title>                
                </Card.Body>
              </Card>
            </Col>
          )
          )}          
      </Row>
      <Button variant="primary" onClick={()=> authors.addAuthor({name: 'Ник', lastName: 'Перумов'})}>Добавить жанр</Button>
    </>    
  )
})

export default AuthorsList;