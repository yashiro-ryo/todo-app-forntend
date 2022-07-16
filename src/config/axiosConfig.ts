import axiosBase from 'axios'

const BASE_URL = 'https://todo-app-yashiro.herokuapp.com'
//const BASE_URL = 'http://localhost:5050'

const axios = axiosBase.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json',
  withCredentials: true
});

export default axios;