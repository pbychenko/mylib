import { Button } from 'react-bootstrap';
import Navibar from '../components/Navibar';
import GenresList from '../components/GenresList'; 
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { observer } from 'mobx-react-lite'
import { useStore } from '../components/StoreProvider'
import {useEffect, useCallback} from 'react';
import Genress from '../components/Genress'

// const Genres = () => {
const Genres = observer(() => {
  const { genres } = useStore();
//   // genres.fetchGenres()
  // console.log(genres.genres)
//   console.log(counter.count)

  // useEffect(async() => {
  //   const data = (await axios.get('http://localhost:3333/api/genres')).data;
  //   genres.hydrate(data)
    // genres.fetchGenres()
//     // fetchTypes().then(data => device.setTypes(data))
//     // fetchBrands().then(data => device.setBrands(data))
//     // fetchDevices(null, null, 1, 2).then(data => {
//     //     device.setDevices(data.rows)
//     //     device.setTotalCount(data.count)
//     // })
// }, [])
    // const handelAddGenre = useCallback(async() => {
    //   return genres.addGenre('test');
    // }, [genres])

// useEffect(() => {
//   genres.fetchGenres()
//     // store.start()

//     // stop the clock when the component unmounts
//     // return () => {
//     //   store.stop()
//     // }
    
//   }, [genres])

  // const handelAddGenre = async () => {
  //     // const res = await axios.post('http://localhost:3333/api/genres', {
  //     //   title: 'Fred123',
  //     // });
  //     genres.addGenre('test')
  //     // console.log('add genre', res);
  //   }  

  return (
    <>      
      <Navibar />
      <Container className="mt-2">
        <GenresList genres={genres.genres}/>
        <Button variant="primary" onClick={()=> genres.addGenre()}>Добавить жанр</Button>
        {/* <Todo /> */}
      </Container>
      {/* <Genress /> */}
    </>
  )
});

// const Genres = ({ genres }) => {
//   // const { genres } = useStore();
//   // console.log('test1', genres)
//   return (
//     <>      
//       <Navibar />
//       <Container className="mt-2">
//         <GenresList genres={genres}/>
//         <Button variant="primary" onClick={handelAddGenre}>Добавить жанр</Button>
//       </Container>
//     </>
//   )
// }


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