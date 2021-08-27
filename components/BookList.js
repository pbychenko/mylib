import { observer } from 'mobx-react-lite'
// import { useStore } from './StoreProvider'
import { Col, Button, Row, Card } from 'react-bootstrap';

import Image from 'next/image'

const BookList = ({books}) => { //observer(({books}) => {
    console.log('test1')
    console.log(books)
  return (
    <Row>     
            {books.map((book) => 
                (<Col  md={3}>
                <Card style={{ width: '18rem' }}>
                    <Image
                        src="/images/test.jpg" // Route of the image file
                        height={300} // Desired size with correct aspect ratio
                        width={144} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <Card.Body> 
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{book.autor}</Card.Subtitle>
                    <Card.Text> Кто взял </Card.Text>
                    {book.isTaken ? null: (<Button variant="primary">Взять</Button>)}
                    </Card.Body>
                </Card>
            </Col>)
            )}
            {/* {books.map((book) => (<Image
                        src="/images/test.jpg" // Route of the image file
                        height={300} // Desired size with correct aspect ratio
                        width={144} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />))} */}


            {/* <Col  md={3}>
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
            </Col> */}

          </Row>
  )
// })
        }

export default BookList;