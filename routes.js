const host = '';
const prefix = 'api';

export default {
  genresPath: () => [host, prefix, 'genres'].join('/'),
  // channelPath: (id) => [host, prefix, 'channels', id].join('/'),
  // channelMessagesPath: (id) => [host, prefix, 'channels', id, 'messages'].join('/'),
  // channelsPath: () => [host, prefix, 'channels'].join('/'),
  // channelPath: (id) => [host, prefix, 'channels', id].join('/'),
  // channelMessagesPath: (id) => [host, prefix, 'channels', id, 'messages'].join('/'),
};