import { runInAction, makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import axios from 'axios';

enableStaticRendering(typeof window === 'undefined')

export default class Genres {
  genres = []
  rootStore

  // constructor(rootStore) {
  //   makeAutoObservable(this, { rootStore: false })
  //   this.rootStore = rootStore
  // }

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  addGenre = async (title) => {
    const res = await axios.post('http://localhost:3333/api/genres', {
      title,
    });
    console.log(res.data)    
    this.genres.push({id: res.data, title});
  }

  // addGenre() {
  //   // const res = await axios.post('http://localhost:3333/api/genres', {
  //   //   title: 'test',
  //   // });
  //   console.log('in add')
  //   // console.log(this.genres)   
  //   this.genres.push({id: 142, title: 'god'});
  //   // console.log(this.genres) 
  // }

  // deleteItem(id) {
  //   this.todos = this.todos.filter(el => el.id !== id);
  // }

  // changeItem(id) {
  //   this.todos = this.todos.map(el => el.id === id ? { ...el, title: el.title +'c' } : el);
  // }

  fetchGenres = async () => {
    const genres = (await axios.get('http://localhost:3333/api/genres')).data;


    runInAction(() => {
      this.genres = genres;      
    })
  }

  get genresData() {
    return this.genres;
  }

  hydrate = (data) => {
    if (!data) return;

    this.genres = data;
  }
}
