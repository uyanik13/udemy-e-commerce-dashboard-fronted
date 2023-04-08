import axios from '@/plugins/axios';

export const get = (url, request) => {
  return axios
    .get( url, request)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};

export const post = (url, request, headers = {}) => {
  return axios
    .post(url, request,{ headers:headers})
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
}; 

export const patch = (url, request, headers = {}) => {
  return axios
    .post(url, request, { headers })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};


export const _delete = (url, request = null) => {
  return axios
    .delete(url, request)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
