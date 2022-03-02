import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';
import cookies from 'js-cookie';
import axios from 'axios';
import React, { useEffect } from 'react';
import getModal from './modals/index';

import Image from 'next/image'

const fetchUser = async (t, store) => {
  try {
    const user = (await axios.get('http://localhost:3333/api/profile', { headers: { Authorization: `Bearer ${t}` }})).data;
    // console.log('us', user)
    store.setIsAuth(true);
    return user;
  } catch (e) {
    // console.log('asss', e);
    store.setIsAuth(false);
    return '401';
  }
}

const BookList = observer(({ userId }) => {
  // const { booksStore, authorsStore } = useStore();
  const { booksStore, userStore, modalsStore, authorsStore } = useStore();
  const token = cookies.get('token');

  useEffect(() => {    
    if (token) {
      // console.log('before')
      const user = fetchUser(token, userStore)
    }
  }, [])
  // console.log('useыы', userStore.isAuth)

  const renderModal = () => {
    if (modalsStore.modalName === '') {
      return null;
    }

    const ModalComponent = getModal(modalsStore.modalName);
    return (<ModalComponent token={token} />);
  };
  
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
    {/* <Button variant="primary" onClick={()=> booksStore.addBook({
      title: 'Мертвые туши',
      about: 'о коррупции',
      genreId: 16,
      authorIds: [2, 3],
      }, token)}>Добавить книгу</Button> */}
      {userStore.isAuth ? (<Button variant="primary" onClick={()=> modalsStore.showModal('addBookModal')}>Добавить книгу</Button>) : null }
      {renderModal()}
    </>         
  )
})

export default BookList;