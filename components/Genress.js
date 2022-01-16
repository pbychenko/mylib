// import { observer } from 'mobx-react-lite'
// import { useStore } from './StoreProvider'

// const Genres = observer((props) => {
//   // use store from the store context
//   const { genres } = useStore();
//   // genres.fetchGenres()
//   // genres.fetchGenres()

//   return (
//     <ul>
//       {genres.genres.map(el => ( 
//         <li key={el.id}>
//           {el.title}
//           {/* <button onClick = {()=> todo.changeItem(el.id)}></button> */}
//         </li>
//       ))}
//     </ul>
//   )
// })
import { Button } from 'react-bootstrap';
import Navibar from './Navibar';
import GenresList from './GenresList'; 
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
// import Todo from '../components/Todo'

const Genress = observer((props) => {
  const { genres } = useStore();

  return (
    <>      
      <Navibar />
      <Container className="mt-2">
        <GenresList genres={genres.genres}/>
        <Button variant="primary" onClick={()=> genres.addGenre('test')}>Добавить жанр</Button>
        {/* <Todo /> */}
      </Container>
    </>
  )
});

export default Genress;
