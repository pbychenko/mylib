import { createContext, useContext } from 'react'
import { Store } from '../store'

let store
export const StoreContext = createContext()

export function useStore() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}

export function StoreProvider({ children, initialState: initialData }) {
  const store = initializeStore(initialData)

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

// const books = [
//   {
//     id:1,
//     autor: 'Пелевин',
//     title: 'Амун Ра',
//     isTaken: false,
//   },
//   {
//     id:2,
//     autor: 'Акунин',
//     title: 'Рассказы',
//     isTaken: true,
//   },
//   {
//     id:1,
//     autor: 'Толстой',
//     title: 'Война и мир',
//     isTaken: false,
//   },
// ];

// function initializeStore(initialData = {counter: 2,
//   todo: [ { id:1, title:'a'}, { id:2, title:'b'} ],
//   genres: [ { id:1, title:'c'}, { id:2, title:'d'}],
// }) {
function initializeStore(initialData = {counter: 2,
  todo: [ { id:1, title:'a'}, { id:2, title:'b'} ],
  genres: []}) {
    // console.log(initialData.genres)
  // function initializeStore(initialData = null) {
  console.log('test')
  const _store = store ?? new Store()
  // console.log(_store.genres)
  _store.genres.fetchGenres()
  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (initialData) {
    _store.hydrate(initialData)
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}
