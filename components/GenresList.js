import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';
import cookies from 'js-cookie';
import axios from 'axios';
import React, { useEffect } from 'react';
import getModal from './modals/index';

const fetchUser = async (t, store) => {
  try {
    const user = (await axios.get('http://localhost:3333/api/profile', { headers: { Authorization: `Bearer ${t}` }})).data;
    // console.log('us', user)
    store.setIsAuth(true);
    return user;
  } catch (e) {
    console.log('asss', e);
    store.setIsAuth(false);
    return '401';
  }
}

const GenresList = observer(() => {
  const { genresStore, userStore, modalsStore } = useStore();
  const token = cookies.get('token');

  useEffect(() => {    
    if (token) {
      console.log('before')
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
          {genresStore.genres.map((genre) => 
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
      {userStore.isAuth ? (<Button variant="primary" onClick={()=> modalsStore.showModal('addGenreModal')}>Добавить жанр</Button>) : null }
      {renderModal()}      
    </>    
  )
})

export default GenresList;