import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'

const Genres = observer((props) => {
  // use store from the store context
  const { genres } = useStore();
  // genres.fetchGenres()
  // genres.fetchGenres()

  return (
    <ul>
      {genres.genres.map(el => ( 
        <li key={el.id}>
          {el.title}
          {/* <button onClick = {()=> todo.changeItem(el.id)}></button> */}
        </li>
      ))}
    </ul>
  )
})

export default Genres
