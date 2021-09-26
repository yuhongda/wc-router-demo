/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import axios from '../utils/axios';

export async function getCurrentUserInfo() {
  return axios({
    url: 'api/common/user',
    method: 'post',
    errorTitle: '获取用户信息'
  });
}

export async function getSalesListData(params) {
  return axios({
    url: 'api/common/user',
    method: 'post',
    data: params,
    errorTitle: '获取列表数据'
  });
}
