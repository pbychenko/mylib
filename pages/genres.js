import { Button } from 'react-bootstrap';
import GenresList from '../components/GenresList'; 
import { Container } from 'react-bootstrap';
// import { observer } from 'mobx-react-lite'
// import { useStore } from '../components/StoreProvider'
import cookies from 'js-cookie';

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
      <Container className="mt-2">
        <GenresList />
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

// export const getServerSideProps = async () => {
//   const token = cookies.get('token');
//   console.log('ss', token)
//   if (token) {
//     const user = (await axios.get('http://localhost:3333/api/profile', { headers: { Authorization: `Bearer ${token}` }})).data;
//     // console.log(user);
//     if (user) {
//       return { props: { user } };
//     }
//   }
//   return { props: { user: null } };
// }
export default Genres;