import { observer,mobx } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';
import cookies from 'js-cookie';
import axios from 'axios';
import React, { useEffect } from 'react';
import getModal from './modals/index';
import Image from 'next/image';

const fetchUser = async (t, store) => {
  try {
    const user = (await axios.get('http://localhost:3333/api/profile', { headers: { Authorization: `Bearer ${t}` }})).data;
    // console.log('us', user)
    store.setIsAuth(true);
    store.setCurrentUser(user)
    return user;
  } catch (e) {
    // console.log('asss', e);
    store.setIsAuth(false);
    return '401';
  }
}

const BookList = observer(() => {
  // const { booksStore, authorsStore } = useStore();
  const { bookStore, userStore, modalStore, authorStore } = useStore();
  const token = cookies.get('token');

  useEffect(() => {    
    if (token) {
      // console.log('before')
      const user = fetchUser(token, userStore)
    }
  }, [])
  // console.log('useыы', userStore.isAuth)
  // setLoading(true)
  //   if (!token) {
  //     router.push('/');
  //   }  
  //   if (token) {
  //     axios.get('http://localhost:3333/api/profile', { headers: { Authorization: `Bearer ${token}` }})
  //       .then((res) => {
  //         // const user = { }
  //         // setUser(res.data)
  //         userStore.setCurrentUser(res.data)
  //         setLoading(false)
  //       }).catch((e) => {
  //         console.log(e)
  //         router.push('/');
  //       });
  //   }

  const renderModal = () => {
    if (modalStore.modalName === '') {
      return null;
    }

    const ModalComponent = getModal(modalStore.modalName);
    return (<ModalComponent token={token} />);
  };
  // console.log(booksStore.books)
  
  return (
    <>
    <Row>     
      {bookStore.books.map((book) => 
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
              {(!book.holderId && userStore.isAuth) ? (<Button variant="primary" onClick={()=> bookStore.setHolder(book, userStore.currentUser.id, token)}>Взять</Button>) : null}
              {book.holderId ? (<Card.Text> Кто взял: {userStore.users.filter(user => user.id === book.holderId)[0].full_name}</Card.Text>) : null}
              </Card.Body>
          </Card>
      </Col>)
      )}
    </Row>
      {userStore.isAuth ? (<Button variant="primary" onClick={()=> modalStore.showModal('addBookModal')}>Добавить книгу</Button>) : null }
      {renderModal()}
    </>         
  )
})

export default BookList;