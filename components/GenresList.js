import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';
import cookies from 'js-cookie';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const fetchUser = async (t, store) => {
  try {
    const user = (await axios.get('http://localhost:3333/api/profile', { headers: { Authorization: `Bearer ${t}` }})).data;
    console.log('us', user)
    store.setIsAuth(true);
    return user;
  } catch (e) {
    console.log('asss', e);
    store.setIsAuth(false);
    return '401';
  }
}

const GenresList = observer(() => {
  const { genres, userStore } = useStore();
  // const token = cookies.get('token');
  // if (token) {
  //   console.log('before')
  //   const user = fetchUser(token, userStore)
  // }

  useEffect(() => {
    const token = cookies.get('token');
    if (token) {
      console.log('before')
      const user = fetchUser(token, userStore)
    }
  }, [])
  console.log('use', userStore.isAuth)

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