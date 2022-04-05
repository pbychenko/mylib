import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';
import getModal from './modals/index';
import cookies from 'js-cookie';
import React, { useEffect } from 'react';
import checkAuthorization from '../utils';

const AuthorsList = observer(() => {
  const { authorStore, userStore, modalStore } = useStore();
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
          {authorStore.authors.map((author) => 
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
      {userStore.isAuth ? (<Button variant="primary" onClick={()=> modalStore.showModal('addAuthorModal')}>Добавить автора</Button>) : null }
      {renderModal()} 
    </>    
  )
})

export default AuthorsList;