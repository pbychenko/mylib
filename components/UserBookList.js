import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';
import cookies from 'js-cookie';
import Image from 'next/image';

const UserBookList = observer(() => {
  const { bookStore, userStore, authorStore } = useStore();
  const token = cookies.get('token');
  const userBooks = bookStore.books.filter(book => book.holderId === userStore.currentUser.id);
  
  return (
    <>
    <Row>     
      {userBooks.map((book) => 
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
              {authorStore.authors.filter(author => (book.authorIds.includes(author.id)))
                .map(author => (              
                  <Card.Subtitle className="mb-2 text-muted" key={author.id}>{author.name} {author.last_name}</Card.Subtitle>
                ))}              
              <Button variant="primary" onClick={()=> bookStore.setHolder(book, null, token)}>Вернуть</Button>
            </Card.Body>
          </Card>
      </Col>)
      )}
    </Row>
    </>         
  )
})

export default UserBookList;