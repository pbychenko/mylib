import { Col, Row } from 'react-bootstrap';
// import Page from '../components/Page'
import Navibar from '../components/Navibar'
import BookList from '../components/BookList';
import PersonalInfoForm from '../components/PersonalInfoForm';
import { Container, Button, Form } from 'react-bootstrap';
import Image from 'next/image'
import cookies from 'js-cookie';
import React, { useEffect } from 'react';

const fetchUser = async (t, store) => {
  try {
    const user = (await axios.get('http://localhost:3333/api/profile', { headers: { Authorization: `Bearer ${t}` }})).data;
    // console.log('us', user)
    store.setIsAuth(true);
    return user;
  } catch (e) {
    // console.log('asss', e);
    store.setIsAuth(false);
    return '401';
  }
}

// const BookList = observer(() => {
  // const { booksStore, authorsStore } = useStore();
  

const Cabinet= () => {
  // console.log(books)
  // console.log(userData)
  // const [ user ] = userData
  // const { booksStore, userStore, modalsStore, authorsStore } = useStore();
  const token = cookies.get('token');
  let user;

  useEffect(() => {    
    if (token) {
      // console.log('before')
      user = fetchUser(token, userStore)
    }
  }, [])
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

// export function getServerSideProps() {
//   const books = [
//     {
//       id:1,
//       autor: 'Пелевин',
//       title: 'Амун Ра',
//       holder: 'Иван',
//       isTaken: true,
//     },
//     {
//       id:2,
//       autor: 'Акунин',
//       title: 'Рассказы',
//       holder: null,
//       isTaken: false,
//     },
//     {
//       id:1,
//       autor: 'Толстой',
//       title: 'Война и мир',
//       holder: 'Настя',
//       isTaken: true,
//     },
//   ];

//   const userData = [
//     {
//       id: 1,
//       name: 'Павел',
//       lastName: 'Быченко',
//       email: 'cbpa@technodom.kz',
//     }
//   ];

//   return { props: { books, userData } }
// }
