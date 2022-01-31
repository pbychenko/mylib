import { Col, Row } from 'react-bootstrap';
// import Page from '../components/Page'
import Navibar from '../components/Navibar'
import FilterForm from '../components/FilterForm';
import BookList from '../components/BookList'; 
import { Container,Card, Button } from 'react-bootstrap';

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

// export function getServerSideProps() {
//   return { props: { initialState: { books, counter: 17, todo: [{id:1, title:'y'} ]} } }
// }

export default Catalog;