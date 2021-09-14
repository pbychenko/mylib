import { Col, Row } from 'react-bootstrap';
// import Page from '../components/Page'
import Navibar from '../components/Navibar'
import BookList from '../components/BookList'; 
import { Container, Button, Form } from 'react-bootstrap';
import Image from 'next/image'

const Cabinet= ({ books, userData }) => {
  // console.log(books)
  // console.log(userData)
  const [ user ] = userData
  return (
    <>      
      <Navibar />
      <Container className="mt-2">
          <h2>Профиль</h2>
          <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Имя</Form.Label>
                <Form.Control placeholder="Ваше имя" value ={user.name}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control placeholder="Ваша фамилия" value={user.lastName} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={user.email}/>
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Изменить
            </Button>
         </Form>
          <h2>Взятые книги</h2>
          <BookList books={books}/>
      </Container>
    </>
  )
}

export default Cabinet;

export function getServerSideProps() {
  const books = [
    {
      id:1,
      autor: 'Пелевин',
      title: 'Амун Ра',
      holder: 'Иван',
      isTaken: true,
    },
    {
      id:2,
      autor: 'Акунин',
      title: 'Рассказы',
      holder: null,
      isTaken: false,
    },
    {
      id:1,
      autor: 'Толстой',
      title: 'Война и мир',
      holder: 'Настя',
      isTaken: true,
    },
  ];

  const userData = [
    {
      id: 1,
      name: 'Павел',
      lastName: 'Быченко',
      email: 'cbpa@technodom.kz',
    }
  ];

  return { props: { books, userData } }
}
