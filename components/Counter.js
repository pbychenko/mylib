import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'

const Counter = observer((props) => {
  // use store from the store context
  const { counter } = useStore()
  // console.log(store)

  return (
    <div className={counter.light ? 'light' : ''}>
      {counter.count}
      <button onClick = {()=> counter.increment()}>+</button>
      <button onClick = {()=> counter.decrement()}>-</button>
      <style jsx>{`
        div {
          padding: 15px;
          color: #82fa58;
          display: inline-block;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  )
})

export default Counter
