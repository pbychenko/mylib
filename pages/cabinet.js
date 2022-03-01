import { Col, Row } from 'react-bootstrap';
// import Page from '../components/Page'
import Navibar from '../components/Navibar';
import PersonalInfoForm from '../components/PersonalInfoForm';
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

const Cabinet= () => {
  const router = useRouter();
  // const { userStore } = useStore();
  const token = cookies.get('token');
  // let user
  const [user, setUser] = useState(null)
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
          setUser(res.data)
          setLoading(false)
        }).catch((e) => {
          console.log(e)
          router.push('/');
        });
    }   
  }, [user]);

  // useEffect(async () => {
  //   if (!token) {
  //     router.push('/');
  //   }  
  //   if (token) {
  //     // console.log('before')
  //     user = fetchUser(token, userStore)
  //     if (!user) {
  //       router.push('/');
  //     }
  //   }    
    
  // }, []);
  console.log('test', user)

  return (
    <>      
      <Navibar />
      <Container className="mt-2">
          <h2>Профиль</h2>
          {user ? <PersonalInfoForm user={user}/> : null }
          {/* <PersonalInfoForm user={user}/> */}
          {/* <h2>Взятые книги</h2> */}
          {/* <BookList books={books}/> */}
      </Container>
    </>
  )
};

export default Cabinet;
