import GenresList from '../components/GenresList'; 
import { Container } from 'react-bootstrap';

const Genres = () => {
  return (
    <> 
      <Container className="mt-2">
        <GenresList />
      </Container>
    </>
  )
};

export default Genres;