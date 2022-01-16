import Page from '../components/Page'
import { useStore } from '../components/StoreProvider'

export default function Index() {
  const { genres } = useStore();
  console.log(genres.genres)
  return <Page title="Index Page" linkTo="/other" />
}
