import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '970ece1313824d0492b047841c35bf64',
  },
});
