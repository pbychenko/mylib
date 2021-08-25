import { Col, Row } from 'react-bootstrap';
// import Page from '../components/Page'
import Navibar from '../components/Navibar'
import { Container, CardGroup, Card, Button } from 'react-bootstrap';
import Image from 'next/image'

const Catalog= () => {
  return (
    <>      
      <Navibar />
      <Container className="mt-2">
          <Row>     
            <Col  md={3}>
                <Card style={{ width: '18rem' }}>
                    <Image
                        src="/images/test.jpg" // Route of the image file
                        height={300} // Desired size with correct aspect ratio
                        width={144} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <Card.Body>
                    <Card.Title>Название</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Автор</Card.Subtitle>
                    <Card.Text> Кто взял </Card.Text>
                    <Button variant="primary">Взять</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col  md={3}>
                <Card style={{ width: '18rem' }}>
                    <Image
                        src="/images/test.jpg" // Route of the image file
                        height={300} // Desired size with correct aspect ratio
                        width={144} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <Card.Body>
                    <Card.Title>Название</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Автор</Card.Subtitle>
                    <Card.Text> Кто взял </Card.Text>
                    <Button variant="primary">Взять</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col  md={3}>
                <Card style={{ width: '18rem' }}>
                    <Image
                        src="/images/test.jpg" // Route of the image file
                        height={300} // Desired size with correct aspect ratio
                        width={144} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <Card.Body>
                    <Card.Title>Название</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Автор</Card.Subtitle>
                    <Card.Text> Кто взял </Card.Text>
                    <Button variant="primary">Взять</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col  md={3}>
                <Card style={{ width: '18rem' }}>
                    <Image
                        src="/images/test.jpg" // Route of the image file
                        height={300} // Desired size with correct aspect ratio
                        width={144} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <Card.Body>
                    <Card.Title>Название</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Автор</Card.Subtitle>
                    <Card.Text> Кто взял </Card.Text>
                    <Button variant="primary">Взять</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col  md={3}>
                <Card style={{ width: '18rem' }}>
                    <Image
                        src="/images/test.jpg" // Route of the image file
                        height={300} // Desired size with correct aspect ratio
                        width={144} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <Card.Body>
                    <Card.Title>Название</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Автор</Card.Subtitle>
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

export default Catalog;