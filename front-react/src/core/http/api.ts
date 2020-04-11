import axios from 'axios';

const api = axios.create({
  baseURL: 'https://poker-api-mp.herokuapp.com'
});

export default api;