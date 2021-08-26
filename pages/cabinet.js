import { Col, Row } from 'react-bootstrap';
// import Page from '../components/Page'
import Navibar from '../components/Navibar'
import BookList from '../components/BookList'; 
import { Container, Button, Form } from 'react-bootstrap';
import Image from 'next/image'

const Book= () => {
  return (
    <>      
      <Navibar />
      <Container className="mt-2">
          <h2>Профиль</h2>
          <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Имя</Form.Label>
                <Form.Control placeholder="Ваше имя" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control placeholder="Ваше имя" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Изменить
            </Button>
         </Form>
          <h2>Взятые книги</h2>
          <BookList />
      </Container>
    </>
  )
}

export default Book;