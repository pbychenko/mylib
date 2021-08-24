import Page from '../components/Page'

const t = {
  counter: 122,
  todo: [{id:1, title: 'dd'}, {id:1, title: 'd2'}]
}

export default function SSG() {
  return <Page title="Index Page" linkTo="/other" />
}

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
export function getStaticProps() {
  return { props: { initialState: { ...t } } }
}
