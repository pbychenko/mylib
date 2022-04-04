import { observer,mobx } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';
import cookies from 'js-cookie';
import axios from 'axios';
import React, { useEffect } from 'react';
import getModal from './modals/index';
import Image from 'next/image';
import UserList from './UsersList';

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

const UserBookList = ({userId}) => {
  // const { booksStore, authorsStore } = useStore();
  const { booksStore, userStore, authorsStore } = useStore();
  // const token = cookies.get('token');

  // useEffect(() => {    
  //   if (token) {
  //     // console.log('before')
  //     const user = fetchUser(token, userStore)
  //   }
  // }, [])
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

 
  // console.log(booksStore.books)
  const userBooks = booksStore.books.filter(book => book.holderId === userId)
  console.log('userId',userId)
  
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
              {authorsStore.authors.filter(author => (book.authorIds.includes(author.id)))
              .map(author => (              
                <Card.Subtitle className="mb-2 text-muted" key={author.id}>{author.name} {author.last_name}</Card.Subtitle>
              ))}              
              {/* {(!book.holderId && userStore.isAuth) ? (<Button variant="primary" onClick={()=> booksStore.setHolder(book, userStore.currentUser.id, token)}>Взять</Button>) : null} */}
              </Card.Body>
          </Card>
      </Col>)
      )}
    </Row>
    </>         
  )
}

export default UserBookList;