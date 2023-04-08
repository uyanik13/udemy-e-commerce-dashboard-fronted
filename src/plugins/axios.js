import axiosOriginal from 'axios';


const axios = axiosOriginal.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 2000,
  headers: {
    "Accept": 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: false
});


export default axios;
