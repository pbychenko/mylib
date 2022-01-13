import { Button } from 'react-bootstrap';
import Navibar from '../components/Navibar';
import GenresList from '../components/GenresList'; 
import { Container } from 'react-bootstrap';
import axios from 'axios';

const Genres = ({ genres }) => {
  // const { genres } = useStore();
  // console.log('test1', genres)
  return (
    <>      
      <Navibar />
      <Container className="mt-2">
        <GenresList genres={genres}/>
        <Button variant="primary">Добавить жанр</Button>
      </Container>
    </>
  )
}

export const getServerSideProps = async () => {
  console.log('here')
  const genres = (await axios.get('http://localhost:3333/api/genres')).data;
  return { props: { genres } }
}

export default Genres;