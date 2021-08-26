import { Col, Row } from 'react-bootstrap';
// import Page from '../components/Page'
import Navibar from '../components/Navibar'
import FilterForm from '../components/FilterForm';
import BookList from '../components/BookList'; 
import { Container,Card, Button } from 'react-bootstrap';
import Image from 'next/image'

const Catalog= () => {
  return (
    <>      
      <Navibar />
      <Container className="mt-2">
        <FilterForm />
        <BookList />
      </Container>
    </>
  )
}

export default Catalog;