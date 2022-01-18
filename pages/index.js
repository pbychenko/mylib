import Page from '../components/Page'
import GenresList from '../components/GenresList'
import { useStore } from '../components/StoreProvider'

export default function Index() {
  const { counter,genres } = useStore();
  console.log(genres.genres)
  return (
    <>
    <Page title="Index Page" linkTo="/other" />
    <GenresList />
    </>
  ) 
  
}
