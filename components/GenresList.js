import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';
import cookies from 'js-cookie';
import axios from 'axios';

const fetchUser = async (t) => {
  // const user = (await axios.get('http://localhost:3333/api/profile', { headers: { Authorization: `Bearer ${t}` }})).data;
  // if (!user) {
  //   return null;
  // }
  // return user;
  try {
    const user = (await axios.get('http://localhost:3333/api/profile', { headers: { Authorization: `Bearer ${t}` }})).data;
    console.log('us', user)
    return user;
  } catch (e) {
    console.log('asss', e);
    // return null;
  }
}

const GenresList = observer(() => {
  const { genres, userStore } = useStore();
  const token = cookies.get('token');
  // let user;
  // // try 
  if (token) {
    console.log('before')
    // const user = fetchUser(token)
    // console.log('in genres', user)
    // if (user) {
    //   userStore.setIsAuth(true);
    // } else {
    //   userStore.setIsAuth(false);
    // }
    try {
      const user = fetchUser(token)
      console.log('in genres', user)
      userStore.setIsAuth(true);
    } catch (e) {
      console.log('in err');
      userStore.setIsAuth(false);
    }
  }
    
    // const user = fetchUser(token)
    // console.log('in genres', user)
    // if (user) {
    //   userStore.setIsAuth(true);
    // }
  // }

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