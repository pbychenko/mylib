import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'

const Todo = observer((props) => {
  // use store from the store context
  const { todo } = useStore()
  // const store = useStore()
  
  // console.log(todo.todos)

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
