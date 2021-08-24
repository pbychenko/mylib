import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'

const Counter = observer((props) => {
  // use store from the store context
  // const store = useStore()
  const { todo } = useStore()

  return (
    <ul>
      {todo.todos.map(el => ( 
        <li key={el.id}>
          {el.title}
          <button onClick = {()=> todo.changeItem(el.id)}></button>
        </li>
      ))}
    </ul>
  )
})

export default Counter
