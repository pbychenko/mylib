import { Col, Row } from 'react-bootstrap';
// import Page from '../components/Page'
import Navibar from '../components/Navibar'
import BookList from '../components/BookList';
import PersonalInfoForm from '../components/PersonalInfoForm';
import { Container, Button, Form } from 'react-bootstrap';
import Image from 'next/image'
import cookies from 'js-cookie';
import React, { useEffect } from 'react';



// const BookList = observer(() => {
  // const { booksStore, authorsStore } = useStore();
  

const Cabinet= () => {
  return (
    <>      
      <Navibar />
      <Container className="mt-2">
          <h2>Профиль</h2>
          <PersonalInfoForm />
          
          {/* <h2>Взятые книги</h2> */}
          {/* <BookList books={books}/> */}
      </Container>
    </>
  )
};

export default Cabinet;
