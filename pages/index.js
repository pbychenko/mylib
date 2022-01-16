import Page from '../components/Page'
import { useStore } from '../components/StoreProvider'

export default function Index() {
  const { counter } = useStore();
  console.log(counter.count)
  return <Page title="Index Page" linkTo="/other" />
}
