import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';
import cookies from 'js-cookie';
import React, { useEffect } from 'react';
import getModal from './modals/index';
import checkAuthorization from '../utils';

const GenresList = observer(() => {
  const { genreStore, userStore, modalStore } = useStore();
  const token = cookies.get('token');

  useEffect(async() => {    
    if (token) {
      await checkAuthorization(token, userStore);
    }
  }, []);

  const renderModal = () => {
    if (modalStore.modalName === '') {
      return null;
    }

    const ModalComponent = getModal(modalStore.modalName);
    return (<ModalComponent token={token} />);
  };

  return (
    <>
      <Row>     
          {genreStore.genres.map((genre) => 
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
      {userStore.isAuth ? (<Button variant="primary" onClick={()=> modalStore.showModal('addGenreModal')}>Добавить жанр</Button>) : null }
      {renderModal()}      
    </>    
  )
})

export default GenresList;