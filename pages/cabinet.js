import { Col, Row } from 'react-bootstrap';
// import Page from '../components/Page'
import { observer } from 'mobx-react-lite';
import PersonalInfoForm from '../components/PersonalInfoForm';
import UserBookList from '../components/UserBookList';
import { Container, Button, Form } from 'react-bootstrap';
import Image from 'next/image'
import cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useStore } from '../components/StoreProvider'
import axios from 'axios';

// const fetchUser = async (t, store) => {
//   try {
//     const user = (await axios.get('http://localhost:3333/api/profile', { headers: { Authorization: `Bearer ${t}` }})).data;
//     console.log('asss', user);
//     store.setIsAuth(true);
//     store.setCurrentUser(user);
//     return user;
//   } catch (e) {
//     console.log('asss', e);
//     store.setIsAuth(false);
//     return '401';
//   }
// }

const Cabinet = observer(() => {
  const router = useRouter();
  const { userStore } = useStore();
  const token = cookies.get('token');
  // let user
  // const [user, setUser] = useState(null)
  const [isLoading, setLoading] = useState(false)

  // useEffect(async () => {
  //   if (!token) {
  //     router.push('/');
  //   }  
  //   if (token) {
  //     try {
  //       user = (await axios.get('http://localhost:3333/api/profile', { headers: { Authorization: `Bearer ${t}` }})).data;
  //       console.log('user', user);
  //       // store.setIsAuth(true);
  //       // store.setCurrentUser(user);
  //       // return user;
  //     } catch (e) {
  //       // console.log('asss', e);
  //       // store.setIsAuth(false);
  //       router.push('/');
  //       // return '401';
  //     }
  //   }    
    
  // }, []);
  useEffect(() => {
    setLoading(true)
    if (!token) {
      router.push('/');
    }  
    if (token) {
      axios.get('http://localhost:3333/api/profile', { headers: { Authorization: `Bearer ${token}` }})
        .then((res) => {
          // const user = { }
          // setUser(res.data)
          userStore.setCurrentUser(res.data)
          setLoading(false)
        }).catch((e) => {
          console.log(e)
          router.push('/');
        });
    }   
  }, []);

  return (
    <>  
      <Container className="mt-2">
          <h2>Профиль</h2>
          {userStore.currentUser ? <PersonalInfoForm /> : null }
          {/* <PersonalInfoForm user={user}/> */}
          {/* <h2>Взятые книги</h2> */}
          {userStore.currentUser ? <UserBookList userId={userStore.currentUser.id} /> : null }
      </Container>
    </>
  )
});

export default Cabinet;
