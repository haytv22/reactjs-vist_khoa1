import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_URL_BACKEND
});

instance.interceptors.response.use(
  function (response) {
    if (response.data && response.data.data) {
      return response.data;
    }
    return response;
  },
  function (error) {
    if(error.response && error.response.data) return error.response.data
    return Promise.reject(error);
  }
);

export default instance;
