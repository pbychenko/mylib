import { Col, Row } from 'react-bootstrap';
// import Page from '../components/Page'
import Navibar from '../components/Navibar'
import { Container, Card, Button } from 'react-bootstrap';
import Image from 'next/image'

const Book= () => {
  return (
    <>      
      {/* <Navibar /> */}
      <Container className="mt-2">
        <Row>
          <Col xs={6} md={6}>
            <Image
              src="/images/test.jpg" // Route of the image file
              height={720} // Desired size with correct aspect ratio
              width={470} // Desired size with correct aspect ratio
              alt="Your Name"
            />
          </Col>
          <Col xs={6} md={6}>
            <Card style={{ width: '28rem' }}>
              <Card.Body>
                <Card.Title>Название</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Автор</Card.Subtitle>
                <Card.Text>
                  О Книге
                </Card.Text>
                <Card.Text> Кто взял </Card.Text>
                <Button variant="primary">Взять</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Book;