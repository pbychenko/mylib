import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import Button from 'react-bootstrap/Button';

const Counter = observer((props) => {
  // use store from the store context
  const { counter } = useStore()
  console.log(counter.count)

  return (
    <div className={counter.light ? 'light' : ''}>
      {counter.count}
      <Button onClick = {()=> counter.increment()}>+</Button>
      <Button onClick = {()=> counter.decrement()}>-</Button>
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
