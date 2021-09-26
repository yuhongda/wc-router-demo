/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios';
import { notification } from 'antd';
import router from '@/stores/router.store';
import localForage from 'localforage';
import { lang } from '@/i18n';
import cookie from './cookie';
const SNOWPACK_PUBLIC___HOST = import.meta && import.meta.env && import.meta.env.SNOWPACK_PUBLIC___HOST;
const SNOWPACK_PUBLIC___LoginHost = import.meta && import.meta.env && import.meta.env.SNOWPACK_PUBLIC___LoginHost;
const SNOWPACK_PUBLIC___LoginHostPassport =
  import.meta && import.meta.env && import.meta.env.SNOWPACK_PUBLIC___LoginHostPassport;

export const axiosInstance = axios.create({
  baseURL: `${typeof SNOWPACK_PUBLIC___HOST == 'undefined' ? __HOST : SNOWPACK_PUBLIC___HOST}`,
});

axiosInstance.defaults.timeout = 120000;
axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axiosInstance.defaults.headers.common['refererClone'] = window.location.href;

//默认中文
const navigatorLang = 'zh-cn';

//通过 param header 和 cookie 中设置语言标识传给后端口，后端使用任意方式获取均可
localForage.getItem('langKey').then((value) => {
  const langKey = value || navigatorLang;
  axiosInstance.defaults.params = { [lang.queryLang]: langKey };
  // axiosInstance.defaults.headers.common[lang.headerLang] = langKey;
  cookie.set(lang.cookieLang, langKey, { expires: new Date(9542968868360) });
});

// http request 拦截器
axios.interceptors.request.use(
  (req) => {
    Object.assign(req.headers.common, {
      XMLHttpRequest: 'X-Requested-With',
      // refererClone: window.location.href,
    });
    return req;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (res) => {
    if (res.status !== 200) {
      notification.error({
        message: n`res.data.errorTitle + '请求失败'`,
      });

      return Promise.reject(res);
    } else if (!res.data.success && res.data.code === '-1') {
      notification.error({
        message: n`res.data.errorTitle + '错误：' + res.data.msg`,
      });

      return Promise.reject(res);
    } else if (!res.data.success && res.data.code === '202') {
      notification.error({
        message: n`res.data.errorTitle + '错误：' + res.data.msg`,
      });

      return Promise.reject(res);
    } else if (!res.data.success && res.data.code === '401') {
      // if (window.location.host.includes('erp') || /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(window.location.host)) {
      window.location.href = `${
        typeof SNOWPACK_PUBLIC___LoginHost == 'undefined' ? __LoginHost : SNOWPACK_PUBLIC___LoginHost
      }${encodeURIComponent(window.location.href)}`;
      // } else {
      //   window.location.href = `${__LoginHostPassport}${encodeURIComponent(window.location.href)}`;
      // }
    } else if (!res.data.success && res.data.code === '9') {
      router.push('/ErrorPage?code=403');
    }
    return res;
  },
  (error) => {
    if (error.code == 'ECONNABORTED' && error.message.includes('15000ms')) {
      return Promise.reject(error);
    }

    if (error.code == 'ECONNABORTED') {
      notification.error({
        message: `请求超时`,
      });
      return Promise.reject(error);
    }

    if (n`error.response.status == 408`) {
      return Promise.reject(error);
    }

    if (n`error.response.status > 400`) {
      notification.error({
        message: `请求出错了。${error.response.status}`,
      });
    } else {
      // router.push('/ErrorPage?code=500');
      notification.error({
        message: `请求出错了。`,
      });
    }
    return Promise.reject(error);
  }
);

export default function (config) {
  if (config.errorTitle) {
    if (!config.transformResponse) {
      config.transformResponse = [];
    }
    Array.isArray(config.transformResponse) &&
      config.transformResponse.push((data) => ({
        ...JSON.parse(data),
        errorTitle: config.errorTitle,
      }));
  }

  return axiosInstance(config).catch(function (res) {
    return res;
  });
}
