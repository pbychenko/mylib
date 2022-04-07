import AuthorsList from '../components/AuthorsList'; 
import { Container } from 'react-bootstrap';

const Authors = () => (
  <>
    <Container className="mt-2">
      <AuthorsList />
    </Container>
  </>
);

export default Authors;