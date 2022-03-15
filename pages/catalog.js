import FilterForm from '../components/FilterForm';
import BookList from '../components/BookList'; 
import { Container } from 'react-bootstrap';

const Catalog= () => {
  return (
    <> 
      <Container className="mt-2">
        <FilterForm />
        <BookList />
      </Container>
    </>
  )
};

export default Catalog;