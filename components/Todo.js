import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'

const Todo = observer((props) => {
  // use store from the store context
  const { todo } = useStore()
  // console.log(todo)

  return (
    <ul>
      {todo.todos.map(el => ( 
        <li key={el.id}>
          {el.title}
          <button onClick = {()=> todo.changeItem(el.id)}></button>
          {/* <button onClick = {()=> todo.deleteItem(el.id)}></button> */}
        </li>
      ))}
    </ul>
  )
})

export default Todo
