import { Button } from 'react-bootstrap';
import Navibar from '../components/Navibar';
import AuthorsList from '../components/AuthorsList'; 
import { Container } from 'react-bootstrap';

const Genres = () => {
// useEffect(() => {
//   genres.fetchGenres()
//     // store.start()

//     // stop the clock when the component unmounts
//     // return () => {
//     //   store.stop()
//     // }
    
//   }, [genres])  

  return (
    <>      
      <Navibar />
      <Container className="mt-2">
        <AuthorsList />
      </Container>
    </>
  )
};

// export const getServerSideProps = async () => {
// //   // console.log('here')
//   const data = (await axios.get('http://localhost:3333/api/genres')).data;
//   console.log(data)
// //   // return { props: { genres } }
//   return { props: { initialState: { counter: 17, todo: [{id:1, title:'y'} ]}, genres:data } }
// }

// export function getServerSideProps() {
//   return { props: { initialState: { counter: 17, todo: [{id:1, title:'y'} ], genres: [{id:1, title:'y'}]} } }
// }

export default Genres;