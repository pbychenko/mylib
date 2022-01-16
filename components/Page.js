import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useEffect } from 'react'
import Counter from './Counter'
import Todo from './Todo'
import GenresList from './GenresList'
import { useStore } from './StoreProvider'

const Page = observer((props) => {
  // use store from the store context
  const {genres} = useStore()

  //start the clock when the component is mounted
  // useEffect(() => {
  //   store.start()

  //   // stop the clock when the component unmounts
  //   return () => {
  //     store.stop()
  //   }
  // }, [store])

  return (
    <div>
      <h1>{props.title}</h1>
      <Counter />
      <Todo />
      <GenresList genres={genres.genres}/>
      
      <nav>
        <Link href={props.linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  )
})

export default Page
