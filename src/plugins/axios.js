import axiosOriginal from 'axios';
import {
  useAuthStore
} from '@/stores/auth.store'


const axios = axiosOriginal.create({
  baseURL: 'http://127.0.0.1:8000/api/auth/',
  timeout: 2000,
  headers: {
    "Accept": 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: false
});

axios.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  if (authStore.isAuthenticated) {
    config.headers.Authorization = `Bearer ${authStore.token}`;
  }
  return config;
});


export default axios;