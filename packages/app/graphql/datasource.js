import { RESTDataSource } from 'apollo-datasource-rest';
import axios from './requests/axios';

export default class ReportAPI extends RESTDataSource {
  constructor() {
    super();
    if (process.env.NODE_ENV == 'production') {
      // 生产
      this.baseURL = 'http://c2m-open-service.jd.com/api/';
    } else if (process.env.NODE_ENV == 'pre') {
      // 预发
      this.baseURL = 'http://c2m-open-pre.jd.com/api/';
    } else if (process.env.NODE_ENV == 'development') {
      // 本地开发
      this.baseURL = 'http://c2m-open-pre-test.jd.com/api/';
    } else if (process.env.NODE_ENV == 'prec') {
      // 生产2
      this.baseURL = 'http://c2m-prec.jd.com/api/';
    }
  }

  willSendRequest(request) {
    // const keys = Object.keys(this.context.headers);
    // keys.forEach(key => {
    //   request.headers.set(key, this.context.headers[key]);
    // });

    const cookieKeys = Object.keys(this.context.cookies);
    const cookieArray = [];
    cookieKeys.forEach(key => {
      if (
        [
          // 'csn',
          // 'cvt',
          // 'RT',
          // '__jdc',
          // 'erp1.jd.com',
          // 'cud',
          // 'X-SCF-Lang',
          // '__jdb',
          // 'jd.erp.lang',
          // '__jdu',
          // '__jda',
          // '__jdv',
          'sso.jd.com',
        ].indexOf(key) != -1
      ) {
        cookieArray.push(`${key}=${this.context.cookies[key]}`);
      }
    });

    request.headers.set('XMLHttpRequest', 'X-Requested-With');
    // request.headers.set('refererClone', this.context.headers.referer);
    request.headers.set('cookie', cookieArray.join(';'));
  }

  async getCategory(params) {
    // const response = await axios({
    //   url: `${this.baseURL}report/getCategory`,
    //   method: 'post',
    //   params,
    // });
    // console.log(response.data)
    // return response.data;

    return this.post(`report/getCategory`);
  }

  async getWhereData(params) {
    return this.post(`model/getEnumByField`, params);
  }

  async getFields(params) {
    return this.post(`model/getDetail?modelId=${params.modelId}`, params);
  }

  async getChannelData(params) {
    return this.post(`common/getChannelByUserAndModel?modelCode=${params.modelId}`, params);
  }

  // async getQueryCriteria() {
  //   return this.post(`productMonitor/getQueryCriteria`);
  // }
}
