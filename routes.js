const host = 'http://localhost:3333';
const prefix = 'api';

export default {
  genresPath: () => [host, prefix, 'genres'].join('/'),
  authorsPath: () => [host, prefix, 'authors'].join('/'),
  authorPath: (id) => [host, prefix, 'authors', id].join('/'),
  booksPath: () => [host, prefix, 'books'].join('/'),
  bookPath: (id) => [host, prefix, 'books', id].join('/'),
  usersPath: () => [host, prefix, 'users'].join('/'),
  userPath: (id) => [host, prefix, 'users', id].join('/'),
};