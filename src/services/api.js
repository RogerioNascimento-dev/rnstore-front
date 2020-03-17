import axios from 'axios';

const api = axios.create({
  baseURL: 'http://rnstore-api.herokuapp.com/api/',
});

export default api;