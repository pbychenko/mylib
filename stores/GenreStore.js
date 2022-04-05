import { runInAction, makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import axios from 'axios';
import routes from '../routes';

enableStaticRendering(typeof window === 'undefined');

export default class GenreStore {
  genres = [];
  rootStore;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  addGenre = async (genreData, token) => {
    const url = routes.genresPath();
    try {
      const { data: id } = await axios.post(url, genreData, { headers: { Authorization: `Bearer ${token}` } });
      this.genres.push({ id, title: genreData.title });
    } catch (e) {
      console.log(e);
    }
  }

  fetchGenres = async () => {
    const url = routes.genresPath();
    try {
      const { data: genres } = await axios.get(url);
      runInAction(() => {
        this.genres = genres;      
      });
    } catch(e) {
      console.log(e);
    }
  }

  hydrate = (data) => {
    if (!data) return;

    this.genres = data;
  }
}
