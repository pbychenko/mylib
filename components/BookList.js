import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';

import Image from 'next/image'

const BookList = observer(() => {
  const { booksStore, authorsStore } = useStore();
  
  return (
    <>
    <Row>     
      {booksStore.books.map((book) => 
          (<Col key={book.id} md={3}>
          <Card style={{ width: '18rem' }} >
              <Image
                src="/images/test.jpg" 
                height={300} 
                width={144} 
                alt="Your Name"
              />
              <Card.Body> 
              <Card.Title>{book.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{book.about}</Card.Subtitle>
              {authorsStore.authors.filter(author => (book.authorIds.includes(author.id)))
              .map(author => (              
                <Card.Subtitle className="mb-2 text-muted" key={author.id}>{author.name} {author.last_name}</Card.Subtitle>
              ))}
              
              {/* {book.isTaken ? null: (<Button variant="primary">Взять</Button>)}
              {book.isTaken ? (<Card.Text> Кто взял: {book.holder}  </Card.Text>) : null} */}
              </Card.Body>
          </Card>
      </Col>)
      )}
    </Row>
    <Button variant="primary" onClick={()=> booksStore.addBook({
      title: 'Мертвые туши',
      about: 'о коррупции',
      genreId: 2,
      authorIds: [13],
      })}>Добавить книгу</Button>
    </>         
  )
})

export default BookList;