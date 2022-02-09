import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';
import getModal from './modals/index';
import cookies from 'js-cookie';
import React, { useEffect } from 'react';
import axios from 'axios';

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

const AuthorsList = observer(() => {
  const { authorsStore, userStore, modalsStore } = useStore();
  const token = cookies.get('token');

  useEffect(() => {    
    if (token) {
      console.log('before')
      const user = fetchUser(token, userStore)
    }
  }, [])
  console.log('useыы', userStore.isAuth)

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
          {authorsStore.authors.map((author) => 
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
      {userStore.isAuth ? (<Button variant="primary" onClick={()=> modalsStore.showModal('addAuthorModal')}>Добавить автора</Button>) : null }
      {renderModal()} 
    </>    
  )
})

export default AuthorsList;