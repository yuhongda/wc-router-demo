import axios from 'axios';
export const axiosInstance = axios.create({});

axiosInstance.defaults.timeout = 30000;
axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// http request 拦截器
axios.interceptors.request.use(
  req => {
    Object.assign(req.headers.common, {
      XMLHttpRequest: 'X-Requested-With',
    });
    return req;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  res => {
    if (res.status !== 200) {
      return Promise.reject(res);
    } else if (!res.data.success && res.data.code === '-1') {
      return Promise.reject(res);
    } else if (!res.data.success && res.data.code === '401') {
      return Promise.reject(res);
    } else if (!res.data.success && res.data.code === '9') {
      return Promise.reject(res);
    }
    return res;
  },
  error => {
    if (error.code == 'ECONNABORTED' && error.message.includes('15000ms')) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default function(config) {
  return axiosInstance(config).catch(function(res) {
    return res;
  });
}
