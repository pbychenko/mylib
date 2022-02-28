import { Col, Row } from 'react-bootstrap';
// import Page from '../components/Page'
import Navibar from '../components/Navibar';
import PersonalInfoForm from '../components/PersonalInfoForm';
import { Container, Button, Form } from 'react-bootstrap';
import Image from 'next/image'
import cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStore } from '../components/StoreProvider'
import axios from 'axios';

const fetchUser = async (t, store) => {
  try {
    const user = (await axios.get('http://localhost:3333/api/profile', { headers: { Authorization: `Bearer ${t}` }})).data;
    store.setIsAuth(true);
    return user;
  } catch (e) {
    console.log('asss', e);
    store.setIsAuth(false);
    return '401';
  }
}

const Cabinet= () => {
  const router = useRouter();
  const { userStore } = useStore();
  const token = cookies.get('token');

  useEffect(() => {
    if (!token) {
      router.push('/');

    }  
    if (token) {
      // console.log('before')
      const user = fetchUser(token, userStore)
      if (!user) {
        router.push('/');
      }
    }    
    
  }, []);  

  return (
    <>      
      <Navibar />
      <Container className="mt-2">
          <h2>Профиль</h2>
          {/* <PersonalInfoForm /> */}
          
          {/* <h2>Взятые книги</h2> */}
          {/* <BookList books={books}/> */}
      </Container>
    </>
  )
};

export default Cabinet;
