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
          {/* <button onClick = {()=> todo.changeItem(el.id)}></button> */}
          <button onClick = {()=> todo.addItem({id:1, title: 'test'})}></button>
          {/* <Button variant="primary" onClick={()=> genres.addGenre()}>Добавить жанр</Button> */}
        </li>
      ))}
    </ul>
  )
})

export default Todo
