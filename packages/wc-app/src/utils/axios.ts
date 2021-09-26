/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `/`
});

axiosInstance.defaults.timeout = 120000;
axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axiosInstance.defaults.headers.common['refererClone'] = window.location.href;
axiosInstance.defaults.headers.common['dsm-platform'] = 'pc';

// http request 拦截器
axios.interceptors.request.use(
  req => {
    Object.assign(req.headers.common, {
      XMLHttpRequest: 'X-Requested-With',
      // refererClone: window.location.href
    });
    return req;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default function (config) {
  if (config.errorTitle) {
    if (!config.transformResponse) {
      config.transformResponse = [];
    }
    Array.isArray(config.transformResponse) &&
      config.transformResponse.push(data => ({
        ...JSON.parse(data),
        errorTitle: config.errorTitle
      }));
  }

  return axiosInstance(config).catch(function (res) {
    return res;
  });
}
